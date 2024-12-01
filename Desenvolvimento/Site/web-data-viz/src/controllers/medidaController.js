var medidaModel = require("../models/medidaModel");

function buscarTotais(req, res) {
    const idUsuario = req.query.idUsuario;

    if (!idUsuario) {
        res.status(400).send("O ID do usuário não foi fornecido.");
        return;
    }

    medidaModel.buscarTotais(idUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna apenas o objeto de resultado.
            } else {
                res.status(204).send("Nenhum dado encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar totais:", erro.sqlMessage || erro);
            res.status(500).json({ erro: erro.sqlMessage || "Erro interno do servidor." });
        });
}


function buscarUltimasMedidas(req, res) {
    const idUsuario = req.query.idUsuario;

    medidaModel.buscarUltimasMedidas(idUsuario).then(function (resultado) {
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

    medidaModel.buscarTotais(fkUsuario)
    .then(function (resultado) {
        const totalAulas = resultado[0]?.totalAulas || 0;

        // Se o total de aulas for igual ou maior que 65, não permitir novo registro
        if (totalAulas >= 65) {
            res.status(403).send("Parabéns! Você já concluiu todas as aulas!");
            return;
        }

        // Caso contrário, registra a produtividade
        medidaModel.registrarProdutividade(qtdAulas, fkUsuario)
            .then(function () {
                res.status(200).send("Produtividade registrada com sucesso!");
            })
            .catch(function (erro) {
                console.log("Erro ao registrar produtividade:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    })
    .catch(function (erro) {
        console.error("Erro ao verificar o total de aulas:", erro.sqlMessage || erro);
        res.status(500).json({ erro: erro.sqlMessage || "Erro interno do servidor." });
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
    registrarProdutividade,
    buscarTotais
    //buscarMedidasEmTempoReal
}