var medidaModel = require("../models/medidaModel");

function buscarUltimasTemperaturas(req, res) {

    const limite_linhas = 8;
     const fkSensor = 2;

    console.log(`Recuperando as ultimas ${fkSensor, limite_linhas} medidas`);

    medidaModel.buscarUltimasTemperaturas( limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas temperaturas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasUmidades(req, res) {

    const limite_linhas = 8;
     const fkSensor = 2;

    console.log(`Recuperando as ultimas ${fkSensor, limite_linhas} medidas`);

    medidaModel.buscarUltimasUmidades(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas umidades.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarTemperaturaEmTempoReal(req, res) {

    var temperatura = req.body.randTemperatura;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarTemperaturaEmTempoReal(temperatura).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUmidadeEmTempoReal(req, res) {

    var umidade = req.body.randUmidade;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUmidadeEmTempoReal(umidade).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function inseriraleatorio(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var randTemperatura = req.body.randTemperatura;
    var randUmidade = req.body.randUmidade;
    var fkSensor = 2;


    // Faça as validações dos valores
    if (randTemperatura == undefined) {
        res.status(400).send("Sua temperatura está undefined!");
    } else if (randUmidade == undefined) {
        res.status(400).send("Sua Umidade está undefined!");
    } else if (fkSensor == undefined) {
        res.status(400).send("Sua fkSensor está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.inseriraleatorio(randTemperatura,randUmidade,fkSensor)
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nDeu ruim no controller\n" ,
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}






module.exports = {
    buscarUltimasTemperaturas,
    buscarUltimasUmidades,
    buscarTemperaturaEmTempoReal,
    buscarUmidadeEmTempoReal,
    inseriraleatorio

}