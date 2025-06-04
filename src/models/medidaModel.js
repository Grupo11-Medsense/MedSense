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




function buscarUltimoDesvio() {
    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(dtRegistro, '%d/%m/%Y %H:%i') AS 'Ultimo registro fora do conforme'
        FROM 
            registro
        WHERE 
            temperatura NOT BETWEEN 2 AND 8
            OR umidade NOT BETWEEN 40 AND 70
        ORDER BY 
            dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDiasSemDesvio(req, res) {
    var instrucaoSql = `
        SELECT 
    COUNT(*) AS 'Dias sem anormalidades'
    FROM (
    SELECT 
        DATE(dtRegistro) AS dia
    FROM 
        registro
    WHERE 
        dtRegistro >= CURDATE() - INTERVAL 30 DAY
    GROUP BY 
        DATE(dtRegistro)
    HAVING 
        SUM(
            temperatura NOT BETWEEN 2 AND 8 
            OR umidade NOT BETWEEN 40 AND 70
        ) = 0
) AS dias_sem_desvio;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarSetorComDesvio() {
    var instrucaoSql = `
        SELECT 
            s.setor AS setor
        FROM 
            registro r
        JOIN 
            sensor se ON r.fkSensor = se.idSensor
        JOIN 
            geladeira g ON se.fkGeladeira = g.idGeladeira
        JOIN 
            setor s ON g.fkSetor = s.idSetor
        WHERE 
            r.temperatura NOT BETWEEN 2 AND 8
            OR r.umidade NOT BETWEEN 40 AND 70
        GROUP BY 
            s.idSetor 
        ORDER BY 
            COUNT(*) DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


 function buscarAlertas() {
    var instrucaoSql = `SELECT 
    DATE(dtRegistro) AS dia,
    SUM(
        CASE 
            WHEN temperatura IS NULL OR umidade IS NULL THEN 1
            WHEN temperatura NOT BETWEEN 2 AND 8 OR umidade NOT BETWEEN 40 AND 70 THEN 1
            ELSE 0
        END
    ) AS 'Alertas por dia'
FROM 
    registro
WHERE 
    dtRegistro >= CURDATE() - INTERVAL 30 DAY
GROUP BY 
    DATE(dtRegistro)
ORDER BY 
    dia DESC
LIMIT 1;
    
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
 }



module.exports = {
    buscarUltimasTemperaturas,
    buscarUltimasUmidades,
    buscarTemperaturaEmTempoReal,
    buscarUmidadeEmTempoReal,
    inseriraleatorio,
    buscarUltimoDesvio,
    buscarDiasSemDesvio,
    buscarSetorComDesvio,
    buscarAlertas
}
