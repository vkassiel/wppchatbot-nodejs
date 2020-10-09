const banco = require('../db')

function execute(user, msg, contato) {

    if(msg){

        banco.db[user].troco = msg;

        banco.db[user].stage = 5;
        
        return[
            `Certo ${banco.db[user].nome}, anotamos aqui que você vai precisar de troco para R$ ${banco.db[user].troco}`,
            `Por fim escolha entre as opções abaixo:\n\n1 - Finalizar pedido e mostrar comprovante\n2 - Cancelar pedido`,
        ]
    }
}

exports.execute = execute;