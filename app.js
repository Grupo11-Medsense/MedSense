// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var empresasRouter = require("./src/routes/empresas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                              
    e
    \n\n\n                
        ######                ###    #    
        #     #  ####  #####   #    # #   
        #     # #    # #    #  #   #   #  
        ######  #    # #####   #  #     # 
        #     # #    # #    #  #  ####### 
        #     # #    # #    #  #  #     # 
        ######   ####  #####  ### #     # 
    \n\n\n                                                                                    
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});


// IMPLEMENTANDO BOBIA

// importando os bibliotecas necessárias
const { GoogleGenAI } = require("@google/genai");
// const express = require("express");
// const path = require("path");

// carregando as variáveis de ambiente do projeto do arquivo .env
require("dotenv").config();

// configurando o servidor express
// const app = express();
const PORTA_SERVIDOR = process.env.PORTA;

// configurando o gemini (IA)
const chatIA = new GoogleGenAI({ apiKey: process.env.MINHA_CHAVE });

// configurando o servidor para receber requisições JSON
app.use(express.json());

// configurando o servidor para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "publicIA")));

// configurando CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});


app.post("/perguntar", async (req, res) => {
    const pergunta = req.body.pergunta;

    try {
        const resultado = await gerarResposta(pergunta);
        res.json({ resultado });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

});

// função para gerar respostas usando o gemini
async function gerarResposta(mensagem) {

    try {
        // gerando conteúdo com base na pergunta
        const modeloIA = chatIA.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `Em um paragráfo responda: ${mensagem}`

        });
        const resposta = (await modeloIA).text;
        const tokens = (await modeloIA).usageMetadata;

        console.log(resposta);
        console.log("Uso de Tokens:", tokens);

        return resposta;
    } catch (error) {
        console.error(error);
        throw error;
    }
}










// // importa os bibliotecas necessários
// const serialport = require('serialport');
// const mysql = require('mysql2');

// // constantes para configurações
// const SERIAL_BAUD_RATE = 9600;
// const SERVIDOR_PORTA = 3300;

// // habilita ou desabilita a inserção de dados no banco de dados
// const HABILITAR_OPERACAO_INSERIR = true;

// // função para comunicação serial
// const serial = async (
//     valoresSensorTemperatura,
//     valoresSensorUmidade,
// ) => {

//     // conexão com o banco de dados MySQL
//     let poolBancoDados = mysql.createPool(
//         {
//             host: '10.18.33.28',
//             user: 'aluno',
//             password: 'Sptech#2024',
//             database: 'testemed',
//             port: 3307
//         }
//     ).promise();

//     // lista as portas seriais disponíveis e procura pelo Arduino
//     const portas = await serialport.SerialPort.list();
//     const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
//     if (!portaArduino) {
//         throw new Error('O arduino não foi encontrado em nenhuma porta serial');
//     }

//     // configura a porta serial com o baud rate especificado
//     const arduino = new serialport.SerialPort(
//         {
//             path: portaArduino.path,
//             baudRate: SERIAL_BAUD_RATE
//         }
//     );

//     arduino.on('open', () => {
//         console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
//     });

//     arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
//         console.log(data);
//         const valores = data.split(';');
//         const Umidade = parseFloat(valores[0]);
//         const Temperatura = parseFloat(valores[1]);
//         const dtregistro = new Date();

//         // Corrigido: armazenar corretamente
//         valoresSensorTemperatura.push(Temperatura);
//         valoresSensorUmidade.push(Umidade);

//         if (HABILITAR_OPERACAO_INSERIR) {
//             var fksensor = 1;
//             await poolBancoDados.execute(
//                 "INSERT INTO registro (temperatura, umidade, fksensor, dtregistro) VALUES (?, ?, ?, ?)",
//                 [Temperatura, Umidade, fksensor, dtregistro]
//             );
//             console.log("valores inseridos no banco: ", Temperatura + ", " + Umidade);
//         }
//     });

//     arduino.on('error', (mensagem) => {
//         console.error(`Erro no arduino (Mensagem: ${mensagem}`);
//     });
// }

// // servidor web
// const servidor = (
//     valoresTemperatura,
//     valoresUmidade
// ) => {
//     const app = express();

//     app.use((request, response, next) => {
//         response.header('Access-Control-Allow-Origin', '*');
//         response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
//         next();
//     });

//     app.listen(SERVIDOR_PORTA, () => {
//         console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
//     });

//     // Corrigido: endpoints corretos
//     app.get('/sensores/temperatura', (_, response) => {
//         return response.json(valoresTemperatura);
//     });

//     app.get('/sensores/umidade', (_, response) => {
//         return response.json(valoresUmidade);
//     });
// }

// (async () => {
//     const valoresTemperatura = [];
//     const valoresUmidade = [];

//     await serial(valoresTemperatura, valoresUmidade);
//     servidor(valoresTemperatura, valoresUmidade);
// })();
