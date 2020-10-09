const banco = require('../../db')

function execute(user, msg, contato) {

    if(msg){
        banco.db[user].stage = 'defineDistrict'

        banco.db[user].numero = msg;

        return[
            `Certo, o número da sua casa é *${banco.db[user].numero}*. Anotado!`,
            `Por último, me fale em *QUAL BAIRRO VOCÊ MORA*:`,
        ]

    }

}

exports.execute = execute;