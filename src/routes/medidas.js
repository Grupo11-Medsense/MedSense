var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

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



router.post("/inseriraleatorio", function (req, res) {
    medidaController.inseriraleatorio(req, res);
});

module.exports = router;