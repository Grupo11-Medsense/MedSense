var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.post("/inserirarduino", (req, res) => {
    try {
         medidaController.inserirDadosArduino(req, res);
    } catch (error) {
        medidaController.inseriraleatorio(req, res);
    }
});




router.get("/ultimas/temperatura", function (req, res) {
    medidaController.buscarUltimasTemperaturas(req, res);
});

router.get("/ultimas/umidade", function (req, res) {
    medidaController.buscarUltimasUmidades(req, res);
});

router.get("/tempo-real/temperatura", function (req, res) {
    medidaController.buscarTemperaturaEmTempoReal(req, res);
});

router.get("/tempo-real/umidade", function (req, res) {
    medidaController.buscarUmidadeEmTempoReal(req, res);
});

router.get("/buscarUltimoDesvio", function (req, res) {
    medidaController.buscarUltimoDesvio(req, res);
})

router.get("/buscarDiasSemDesvio", function (req, res) {
    medidaController.buscarDiasSemDesvio(req, res);
})

router.get("/buscarSetorComDesvio", function (req, res) {
    medidaController.buscarSetorComDesvio(req, res);
})

router.get("/buscarAlertas", function (req, res) {
    medidaController.buscarAlertas(req, res);
})






router.get("/ultimas/temperatura2", function (req, res) {
    medidaController.buscarUltimasTemperaturas2(req, res);
});

router.get("/ultimas/umidade2", function (req, res) {
    medidaController.buscarUltimasUmidades2(req, res);
});

router.get("/tempo-real/temperatura2", function (req, res) {
    medidaController.buscarTemperaturaEmTempoReal2(req, res);
});

router.get("/tempo-real/umidade2", function (req, res) {
    medidaController.buscarUmidadeEmTempoReal2(req, res);
});

router.get("/buscarUltimoDesvio2", function (req, res) {
    medidaController.buscarUltimoDesvio2(req, res);
})

router.get("/buscarDiasSemDesvio2", function (req, res) {
    medidaController.buscarDiasSemDesvio2(req, res);
})

router.get("/buscarSetorComDesvio2", function (req, res) {
    medidaController.buscarSetorComDesvio2(req, res);
})

router.get("/buscarAlertas2", function (req, res) {
    medidaController.buscarAlertas2(req, res);
})









router.get("/ultimas/temperatura3", function (req, res) {
    medidaController.buscarUltimasTemperaturas3(req, res);
});

router.get("/ultimas/umidade3", function (req, res) {
    medidaController.buscarUltimasUmidades3(req, res);
});

router.get("/tempo-real/temperatura3", function (req, res) {
    medidaController.buscarTemperaturaEmTempoReal3(req, res);
});

router.get("/tempo-real/umidade3", function (req, res) {
    medidaController.buscarUmidadeEmTempoReal3(req, res);
});

router.get("/buscarUltimoDesvio3", function (req, res) {
    medidaController.buscarUltimoDesvio3(req, res);
})

router.get("/buscarDiasSemDesvio3", function (req, res) {
    medidaController.buscarDiasSemDesvio3(req, res);
})

router.get("/buscarSetorComDesvio3", function (req, res) {
    medidaController.buscarSetorComDesvio3(req, res);
})

router.get("/buscarAlertas3", function (req, res) {
    medidaController.buscarAlertas3(req, res);
})








// router.post("/inseriraleatorio", function (req, res) {
//     medidaController.inseriraleatorio(req, res);
// });

router.post("/inseriraleatorio2", function (req, res) {
    medidaController.inseriraleatorio2(req, res);
});

router.post("/inseriraleatorio3", function (req, res) {
    medidaController.inseriraleatorio3(req, res);
});


router.post("/enviarObs", function (req, res) {
    medidaController.enviarObs(req, res);
});


module.exports = router;