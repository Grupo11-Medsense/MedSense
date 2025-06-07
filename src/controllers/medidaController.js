var medidaModel = require("../models/medidaModel");

function buscarUltimasTemperaturas(req, res) {

    const limite_linhas = 8;
    const fkSensor = 1;

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
     const fkSensor = 1;

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


function buscarUltimoDesvio(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimoDesvio().then(function (resultado) {
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

function buscarDiasSemDesvio(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarDiasSemDesvio().then(function (resultado) {
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


function buscarSetorComDesvio(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarSetorComDesvio().then(function (resultado) {
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






function buscarAlertas(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarAlertas().then(function (resultado) {
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


















function buscarUltimasTemperaturas2(req, res) {

    const limite_linhas = 8;
    const fkSensor = 5;

    console.log(`Recuperando as ultimas ${fkSensor, limite_linhas} medidas`);

    medidaModel.buscarUltimasTemperaturas2( limite_linhas).then(function (resultado) {
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

function buscarUltimasUmidades2(req, res) {

    const limite_linhas = 8;
    const fkSensor = 5;

    console.log(`Recuperando as ultimas ${fkSensor, limite_linhas} medidas`);

    medidaModel.buscarUltimasUmidades2(limite_linhas).then(function (resultado) {
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



function buscarTemperaturaEmTempoReal2(req, res) {

    var temperatura = req.body.randTemperatura;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarTemperaturaEmTempoReal2(temperatura).then(function (resultado) {
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

function buscarUmidadeEmTempoReal2(req, res) {

    var umidade = req.body.randUmidade;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUmidadeEmTempoReal2(umidade).then(function (resultado) {
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


function buscarUltimoDesvio2(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimoDesvio2().then(function (resultado) {
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

function buscarDiasSemDesvio2(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarDiasSemDesvio2().then(function (resultado) {
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


function buscarSetorComDesvio2(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarSetorComDesvio2().then(function (resultado) {
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


function buscarAlertas2(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarAlertas2().then(function (resultado) {
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















function buscarUltimasTemperaturas3(req, res) {

    const limite_linhas = 8;
    const fkSensor = 5;

    console.log(`Recuperando as ultimas ${fkSensor, limite_linhas} medidas`);

    medidaModel.buscarUltimasTemperaturas2( limite_linhas).then(function (resultado) {
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

function buscarUltimasUmidades3(req, res) {

    const limite_linhas = 8;
     const fkSensor = 5;

    console.log(`Recuperando as ultimas ${fkSensor, limite_linhas} medidas`);

    medidaModel.buscarUltimasUmidades2(limite_linhas).then(function (resultado) {
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

function buscarTemperaturaEmTempoReal3(req, res) {

    var temperatura = req.body.randTemperatura;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarTemperaturaEmTempoReal3(temperatura).then(function (resultado) {
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

function buscarUmidadeEmTempoReal3(req, res) {

    var umidade = req.body.randUmidade;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUmidadeEmTempoReal3(umidade).then(function (resultado) {
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


function buscarUltimoDesvio3(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimoDesvio3().then(function (resultado) {
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

function buscarDiasSemDesvio3(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarDiasSemDesvio3().then(function (resultado) {
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


function buscarSetorComDesvio3(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarSetorComDesvio3().then(function (resultado) {
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






function buscarAlertas3(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarAlertas3().then(function (resultado) {
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



function mandarAlert(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.mandarAlert().then(function (resultado) {
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




function attalerta(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.attalerta().then(function (resultado) {
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








function inserirarduino() {
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
        medidaModel.inserirarduino(randTemperatura,randUmidade,fkSensor)
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










// function inseriraleatorio(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var randTemperatura = req.body.randTemperatura;
//     var randUmidade = req.body.randUmidade;
//     var fkSensor = 2;


//     // Faça as validações dos valores
//     if (randTemperatura == undefined) {
//         res.status(400).send("Sua temperatura está undefined!");
//     } else if (randUmidade == undefined) {
//         res.status(400).send("Sua Umidade está undefined!");
//     } else if (fkSensor == undefined) {
//         res.status(400).send("Sua fkSensor está undefined!");
//     }else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         medidaModel.inseriraleatorio(randTemperatura,randUmidade,fkSensor)
//             .then(
//                 function (resultado) {
//                     if (resultado.length > 0) {
//                         res.status(200).json(resultado);
//                     } else {
//                         res.status(204).send("Nenhum resultado encontrado!")
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nDeu ruim no controller\n" ,
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }




function inseriraleatorio2(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var randTemperatura = req.body.randTemperatura;
    var randUmidade = req.body.randUmidade;
    var fkSensor = 5;


    // Faça as validações dos valores
    if (randTemperatura == undefined) {
        res.status(400).send("Sua temperatura está undefined!");
    } else if (randUmidade == undefined) {
        res.status(400).send("Sua Umidade está undefined!");
    } else if (fkSensor == undefined) {
        res.status(400).send("Sua fkSensor está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.inseriraleatorio2(randTemperatura,randUmidade,fkSensor)
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



function inseriraleatorio3(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var randTemperatura = req.body.randTemperatura;
    var randUmidade = req.body.randUmidade;
    var fkSensor = 6;


    // Faça as validações dos valores
    if (randTemperatura == undefined) {
        res.status(400).send("Sua temperatura está undefined!");
    } else if (randUmidade == undefined) {
        res.status(400).send("Sua Umidade está undefined!");
    } else if (fkSensor == undefined) {
        res.status(400).send("Sua fkSensor está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.inseriraleatorio3(randTemperatura,randUmidade,fkSensor)
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





function enviarObs(req, res) {
    var idAlerta = req.params.idAlerta
    var coment = req.body.coment;

    if (coment == undefined) {
        res.status(400).send("Sua temperatura está undefined!");
    } else {

        medidaModel.enviarObs(coment, idAlerta)
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
    inseriraleatorio2,
    buscarUltimoDesvio2,
    buscarDiasSemDesvio2,
    buscarSetorComDesvio2,
    buscarAlertas2,
    buscarUltimasTemperaturas3,
    buscarUltimasUmidades3,
    buscarTemperaturaEmTempoReal3,
    buscarUmidadeEmTempoReal3,
    inseriraleatorio3,
    buscarUltimoDesvio3,
    buscarDiasSemDesvio3,
    buscarSetorComDesvio3,
    buscarAlertas3,
    inserirarduino,
    enviarObs,
    mandarAlert

}