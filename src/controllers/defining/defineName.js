const banco = require('../../db')

function execute(user, msg, contato) {

    if(msg){
        
        banco.db[user].stage = 1;

        banco.db[user].nome = msg;

        return[
            `Certo *${banco.db[user].nome}*.`, 
            `Agora escolha entre as opções a seguir a razão pela qual está falando conosco:`,
            `1️ - Fazer pedido\n2️ - Ver o nosso horário de funcionamento`,
        ]

    }

}

exports.execute = execute;