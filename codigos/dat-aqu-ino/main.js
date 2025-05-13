// importa os bibliotecas necessários
const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

// constantes para configurações
const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

// habilita ou desabilita a inserção de dados no banco de dados
const HABILITAR_OPERACAO_INSERIR = true;

// função para comunicação serial
const serial = async (
    valoresSensorTemperatura,
    valoresSensorUmidade,
) => {

    // conexão com o banco de dados MySQL
    let poolBancoDados = mysql.createPool(
        {
            host: '127.0.0.1',
            user: 'teste',
            password: 'Urubu100@',
            database: 'testemed',
            port: 3307
        }
    ).promise();

    // lista as portas seriais disponíveis e procura pelo Arduino
    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }

    // configura a porta serial com o baud rate especificado
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );

    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });

    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        console.log(data);
        const valores = data.split(';');
        const Umidade = parseFloat(valores[0]);
        const Temperatura = parseFloat(valores[1]);
        const dtregistro = new Date();

        // Corrigido: armazenar corretamente
        valoresSensorTemperatura.push(Temperatura);
        valoresSensorUmidade.push(Umidade);

        if (HABILITAR_OPERACAO_INSERIR) {
            var fksensor = 1;
            await poolBancoDados.execute(
                "INSERT INTO registro (temperatura, umidade, fksensor, dtregistro) VALUES (?, ?, ?, ?)",
                [Temperatura, Umidade, fksensor, dtregistro]
            );
            console.log("valores inseridos no banco: ", Temperatura + ", " + Umidade);
        }
    });

    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`);
    });
}

// servidor web
const servidor = (
    valoresTemperatura,
    valoresUmidade
) => {
    const app = express();

    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    // Corrigido: endpoints corretos
    app.get('/sensores/temperatura', (_, response) => {
        return response.json(valoresTemperatura);
    });

    app.get('/sensores/umidade', (_, response) => {
        return response.json(valoresUmidade);
    });
}

(async () => {
    const valoresTemperatura = [];
    const valoresUmidade = [];

    await serial(valoresTemperatura, valoresUmidade);
    servidor(valoresTemperatura, valoresUmidade);
})();
