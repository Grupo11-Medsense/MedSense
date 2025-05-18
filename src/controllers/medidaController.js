var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
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


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
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
    var fkSensor = req.body.fkSensorServer;


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
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    inseriraleatorio

}