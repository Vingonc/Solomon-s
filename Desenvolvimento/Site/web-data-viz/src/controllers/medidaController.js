var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    medidaModel.buscarUltimasMedidas().then(function (resultado) {
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

function registrarProdutividade(req, res) {
    var qtdAulas = req.body.produtividadeServer;
    var fkUsuario = req.body.fkUsuarioServer; // Assumindo que o ID do usuário vem na requisição

    if (!qtdAulas || !fkUsuario) {
        res.status(400).send("Dados insuficientes para o registro.");
        return;
    }

    medidaModel.registrarProdutividade(qtdAulas, fkUsuario)
        .then(function () {
            res.status(200).send("Produtividade registrada com sucesso!");
        })
        .catch(function (erro) {
            console.log("Erro ao registrar produtividade:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

/*function buscarMedidasEmTempoReal(req, res) {

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
}*/

module.exports = {
    buscarUltimasMedidas,
    registrarProdutividade
    //buscarMedidasEmTempoReal
}