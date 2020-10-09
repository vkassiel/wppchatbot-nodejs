const banco = require('../../db')

function execute(user, msg, contato) {

    if(msg){
        banco.db[user].stage = 'defineCEP'

        banco.db[user].rua = msg;

        return[
            `Certo, sua rua foi definida para *${banco.db[user].rua}*.`,
            `Agora precisamos que nos diga o *NÚMERO DO SEU CEP*:.`
        ]

    }

}

exports.execute = execute;