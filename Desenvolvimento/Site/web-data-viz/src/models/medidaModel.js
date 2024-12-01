var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `
        SELECT 
            qtdAulas AS produtividade,
            idRegistro AS dado,
            fkUsuario
        FROM produtividade
        ORDER BY idRegistro DESC
        LIMIT 10;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarProdutividade(qtdAulas, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO produtividade (qtdAulas, fkUsuario)
        VALUES (${qtdAulas}, ${fkUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/*function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}*/

module.exports = {
    buscarUltimasMedidas,
    registrarProdutividade
    //buscarMedidasEmTempoReal
}
