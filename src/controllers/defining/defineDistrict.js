const banco = require('../../db')

function execute(user, msg, contato) {

    if(msg){
        // Transfere pro Address pra mostrar o endereço completo
        banco.db[user].stage = 3

        banco.db[user].bairro = msg;

        return[
            `Beleza ${banco.db[user].nome}! O seu bairro foi definido para *${banco.db[user].bairro}*.`,
            `Agora é o seguinte:`,
            `Verifique seu endereço abaixo:`,
            `Rua: ${banco.db[user].rua}\nBairro: ${banco.db[user].bairro}\nNúmero: ${banco.db[user].numero}\nCEP: ${banco.db[user].cep}`,
            `Você *CONFIRMA* que está tudo correto??`,
            `1 - Sim\n2 - Não`,
        ]

    }

}

exports.execute = execute;