var database = require("../database/config");

function buscarUltimasTemperaturas(limite_linhas) {

    var instrucaoSql = `SELECT 
    r.temperatura AS temperatura,
    DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 2
    JOIN geladeira g ON s.fkGeladeira = 3
    WHERE g.idGeladeira = 3  
    ORDER BY r.idRegistro DESC
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasUmidades(limite_linhas) {

    var instrucaoSql = `SELECT 
        umidade as umidade, 
        DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 2
    JOIN geladeira g ON s.fkGeladeira = 3
    WHERE g.idGeladeira = 3  
    ORDER BY r.idRegistro DESC
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarTemperaturaEmTempoReal() {

    var instrucaoSql = `SELECT 
    r.temperatura AS temperatura,
    DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 2
    JOIN geladeira g ON s.fkGeladeira = 3
    WHERE g.idGeladeira = 3  
    ORDER BY r.idRegistro DESC
    LIMIT 8;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUmidadeEmTempoReal() {

    var instrucaoSql = `SELECT 
        umidade as umidade, 
        DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
        FROM registro r
        JOIN sensor s ON r.fkSensor = 2
        JOIN geladeira g ON s.fkGeladeira = 3
        WHERE g.idGeladeira = 3  
        ORDER BY r.idRegistro DESC
        LIMIT 8;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}











function buscarUltimasTemperaturas2(limite_linhas) {

    var instrucaoSql = `SELECT 
    r.temperatura AS temperatura,
    DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 5
    JOIN geladeira g ON s.fkGeladeira = 4
    WHERE g.idGeladeira = 4  
    ORDER BY r.idRegistro DESC
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasUmidades2(limite_linhas) {

    var instrucaoSql = `SELECT 
        umidade as umidade, 
        DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 5
    JOIN geladeira g ON s.fkGeladeira = 4
    WHERE g.idGeladeira = 4  
    ORDER BY r.idRegistro DESC
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarTemperaturaEmTempoReal2() {

    var instrucaoSql = `SELECT 
    r.temperatura AS temperatura,
    DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 5
    JOIN geladeira g ON s.fkGeladeira = 4
    WHERE g.idGeladeira = 4  
    ORDER BY r.idRegistro DESC
    LIMIT 8;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUmidadeEmTempoReal2() {

    var instrucaoSql = `SELECT 
        umidade as umidade, 
        DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
        FROM registro r
        JOIN sensor s ON r.fkSensor = 5
        JOIN geladeira g ON s.fkGeladeira = 4
        WHERE g.idGeladeira = 4  
        ORDER BY r.idRegistro DESC
        LIMIT 8;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimoDesvio2() {
    var instrucaoSql = `
        SELECT 
    DATE_FORMAT(dtRegistro, '%d/%m/%Y %H:%i') AS 'Ultimo registro fora do conforme'
FROM 
    registro
WHERE 
    (temperatura NOT BETWEEN 2 AND 8
    OR umidade NOT BETWEEN 40 AND 70)
    AND fkSensor = 5
ORDER BY 
    dtRegistro DESC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDiasSemDesvio2(req, res) {
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
        AND fkSensor = 5
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


function buscarSetorComDesvio2() {
    var instrucaoSql = `
        SELECT 
    s.setor
FROM 
    alerta a
JOIN sensor se ON a.fkSensor = se.idSensor
JOIN geladeira g ON se.fkGeladeira = g.idGeladeira
JOIN setor s ON g.fkSetor = s.idSetor
GROUP BY 
    s.idSetor
ORDER BY 
    COUNT(*) DESC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarAlertas2() {
    var instrucaoSql = `SELECT 
    DATE(dtRegistro) AS dia,
    COUNT(*) AS total_alertas
FROM 
    alerta
WHERE 
    dtRegistro >= CURDATE() - INTERVAL 30 DAY
    AND fkSensor = 5
GROUP BY 
    DATE(dtRegistro)
LIMIT 1;
    
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}















function buscarUltimasTemperaturas3(limite_linhas) {

    var instrucaoSql = `SELECT 
    r.temperatura AS temperatura,
    DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 6
    JOIN geladeira g ON s.fkGeladeira = 6
    WHERE g.idGeladeira = 6  
    ORDER BY r.idRegistro DESC
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasUmidades3(limite_linhas) {

    var instrucaoSql = `SELECT 
        umidade as umidade, 
        DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 6
    JOIN geladeira g ON s.fkGeladeira = 6
    WHERE g.idGeladeira = 6  
    ORDER BY r.idRegistro DESC
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarTemperaturaEmTempoReal3() {

    var instrucaoSql = `SELECT 
    r.temperatura AS temperatura,
    DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
    FROM registro r
    JOIN sensor s ON r.fkSensor = 6
    JOIN geladeira g ON s.fkGeladeira = 6
    WHERE g.idGeladeira = 6  
    ORDER BY r.idRegistro DESC
    LIMIT 8;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUmidadeEmTempoReal3() {

    var instrucaoSql = `SELECT 
        umidade as umidade, 
        DATE_FORMAT(r.dtRegistro, '%H:%i:%s') AS horario
        FROM registro r
        JOIN sensor s ON r.fkSensor = 6
        JOIN geladeira g ON s.fkGeladeira = 6
        WHERE g.idGeladeira = 6  
        ORDER BY r.idRegistro DESC
        LIMIT 8;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimoDesvio3() {
    var instrucaoSql = `
        SELECT 
    DATE_FORMAT(dtRegistro, '%d/%m/%Y %H:%i') AS 'Ultimo registro fora do conforme'
FROM 
    registro
WHERE 
    (temperatura NOT BETWEEN 2 AND 8
    OR umidade NOT BETWEEN 40 AND 70)
    AND fkSensor = 6
ORDER BY 
    dtRegistro DESC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDiasSemDesvio3(req, res) {
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
        AND fkSensor = 6
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


function buscarSetorComDesvio3() {
    var instrucaoSql = `
        SELECT 
    s.setor
FROM 
    alerta a
JOIN sensor se ON a.fkSensor = se.idSensor
JOIN geladeira g ON se.fkGeladeira = g.idGeladeira
JOIN setor s ON g.fkSetor = s.idSetor
GROUP BY 
    s.idSetor
ORDER BY 
    COUNT(*) DESC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarAlertas3() {
    var instrucaoSql = `SELECT 
    DATE(dtRegistro) AS dia,
    COUNT(*) AS total_alertas
FROM 
    alerta
WHERE 
    dtRegistro >= CURDATE() - INTERVAL 30 DAY
    AND fkSensor = 6
GROUP BY 
    DATE(dtRegistro)
LIMIT 1;
    
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}






function inserirarduino(randTemperatura, randUmidade) {

    let instrucaoSql = "";

    if (randTemperatura < 2 || randTemperatura > 8 || randUmidade < 40 || randUmidade > 70) {
        instrucaoSql = `
            INSERT INTO alerta (temperatura, umidade, fkSensor) 
            VALUES (${randTemperatura}, ${randUmidade}, 2);
        `;
        console.log("Inserindo na tabela ALERTA");
        database.executar(instrucaoSql);  
    }

    instrucaoSql = `
        INSERT INTO registro (temperatura, umidade, fkSensor) 
        VALUES (${randTemperatura}, ${randUmidade}, 2);
    `;
    console.log("Inserindo na tabela REGISTRO");
    database.executar(instrucaoSql);  
}











// function inseriraleatorio(randTemperatura, randUmidade) {

//     let instrucaoSql = "";

    // if (randTemperatura < 2 || randTemperatura > 8 || randUmidade < 40 || randUmidade > 70) {
    //     instrucaoSql = `
    //         INSERT INTO alerta (temperatura, umidade, fkSensor) 
    //         VALUES (${randTemperatura}, ${randUmidade}, 2);
    //     `;
    //     console.log("Inserindo na tabela ALERTA");
    //     database.executar(instrucaoSql);  
    // }

//     instrucaoSql = `
//         INSERT INTO registro (temperatura, umidade, fkSensor) 
//         VALUES (${randTemperatura}, ${randUmidade}, 2);
//     `;
//     console.log("Inserindo na tabela REGISTRO");
//     database.executar(instrucaoSql);  
// }





function inseriraleatorio2(randTemperatura, randUmidade) {
    if (randTemperatura < 2 || randTemperatura > 8 || randUmidade < 40 || randUmidade > 70) {
        const instrucaoAlerta = `
            INSERT INTO alerta (temperatura, umidade, fkSensor) 
            VALUES (${randTemperatura}, ${randUmidade}, 5);
        `;
        console.log("Inserindo na tabela ALERTA");
        database.executar(instrucaoAlerta);
    }

    const instrucaoRegistro = `
        INSERT INTO registro (temperatura, umidade, fkSensor) 
        VALUES (${randTemperatura}, ${randUmidade}, 5);
    `;
    console.log("Inserindo na tabela REGISTRO");

    console.log("Executando a instrução SQL: \n" + instrucaoRegistro);
    return database.executar(instrucaoRegistro);
}



function inseriraleatorio3(randTemperatura, randUmidade) {
    if (randTemperatura < 2 || randTemperatura > 8 || randUmidade < 40 || randUmidade > 70) {
        const instrucaoAlerta = `
            INSERT INTO alerta (temperatura, umidade, fkSensor) 
            VALUES (${randTemperatura}, ${randUmidade}, 6);
        `;
        console.log("Inserindo na tabela ALERTA");
        database.executar(instrucaoAlerta);
    }

    const instrucaoRegistro = `
        INSERT INTO registro (temperatura, umidade, fkSensor) 
        VALUES (${randTemperatura}, ${randUmidade}, 6);
    `;
    console.log("Inserindo na tabela REGISTRO");

    console.log("Executando a instrução SQL: \n" + instrucaoRegistro);
    return database.executar(instrucaoRegistro);
}



function buscarUltimoDesvio() {
    var instrucaoSql = `
        SELECT 
    DATE_FORMAT(dtRegistro, '%d/%m/%Y %H:%i') AS 'Ultimo registro fora do conforme'
FROM 
    registro
WHERE 
    (temperatura NOT BETWEEN 2 AND 8
    OR umidade NOT BETWEEN 40 AND 70)
    AND fkSensor = 2
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
        AND fkSensor = 2
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
    s.setor
FROM 
    alerta a
JOIN sensor se ON a.fkSensor = se.idSensor
JOIN geladeira g ON se.fkGeladeira = g.idGeladeira
JOIN setor s ON g.fkSetor = s.idSetor
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
    COUNT(*) AS total_alertas
FROM 
    alerta
WHERE 
    dtRegistro >= CURDATE() - INTERVAL 30 DAY
    AND fkSensor = 2
GROUP BY 
    DATE(dtRegistro)
LIMIT 1;
    
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



//      function inserirDadosArduino(req, res) {
//     try {
//         arduinoController.readData( (temperatura, umidade) => {
//              arduinoController.insertData(temperatura, umidade, 1);
//             res.status(200).json({ temperatura, umidade });
//         });
//     } catch (error) {
//         console.error('Erro na rota do Arduino:', error);
//         res.status(500).json({ error: error.message });
//     }
// }




module.exports = {
    buscarUltimasTemperaturas,
    buscarUltimasUmidades,
    buscarTemperaturaEmTempoReal,
    buscarUmidadeEmTempoReal,
   // inseriraleatorio,
    buscarUltimoDesvio,
    buscarDiasSemDesvio,
    buscarSetorComDesvio,
    buscarAlertas,
    inseriraleatorio2,
    inseriraleatorio3,
    buscarUltimasTemperaturas2,
    buscarUltimasUmidades2,
    buscarTemperaturaEmTempoReal2,
    buscarUmidadeEmTempoReal2,
    buscarUltimoDesvio2,
    buscarDiasSemDesvio2,
    buscarSetorComDesvio2,
    buscarAlertas2,
    buscarUltimasTemperaturas3,
    buscarUltimasUmidades3,
    buscarTemperaturaEmTempoReal3,
    buscarUmidadeEmTempoReal3,
    buscarUltimoDesvio3,
    buscarDiasSemDesvio3,
    buscarSetorComDesvio3,
    buscarAlertas3,
    inserirarduino
}
