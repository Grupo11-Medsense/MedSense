var database = require("../database/config");

function buscarUltimasTemperaturas(limite_linhas) {

    var instrucaoSql = `SELECT 
        temperatura as temperatura, 
        DATE_FORMAT(dtRegistro,'%H:%i:%s') as horario
                    FROM registro
                    WHERE fkSensor = 2
                    ORDER BY idRegistro DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasUmidades(limite_linhas) {

    var instrucaoSql = `SELECT 
        umidade as umidade, 
        DATE_FORMAT(dtRegistro,'%H:%i:%s') as horario
                    FROM registro
                    WHERE fkSensor = 2 
                    ORDER BY idRegistro DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarTemperaturaEmTempoReal(fkSensor) {

    var instrucaoSql = `SELECT 
        temperatura as temperatura, 
        DATE_FORMAT(dtRegistro,'%H:%i:%s') as horario,
        fkSensor 
        FROM registro WHERE fkSensor = 2
        ORDER BY idRegistro DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUmidadeEmTempoReal(fkSensor) {

    var instrucaoSql = `SELECT 
        umidade as umidade, 
        DATE_FORMAT(dtRegistro,'%H:%i:%s') as horario,
        fkSensor 
        FROM registro WHERE fkSensor = 2
        ORDER BY idRegistro DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inseriraleatorio(randTemperatura, randUmidade, fkSensor) {
    var instrucaoSql = `INSERT INTO registro (temperatura, umidade, fkSensor) VALUES (${randTemperatura}, ${randUmidade}, ${fkSensor});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarUltimasTemperaturas,
    buscarUltimasUmidades,
    buscarTemperaturaEmTempoReal,
    buscarUmidadeEmTempoReal,
    inseriraleatorio
}
