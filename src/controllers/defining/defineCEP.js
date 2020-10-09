const banco = require('../../db')

function execute(user, msg, contato) {

    if(msg){
        banco.db[user].stage = 'defineNumber'

        banco.db[user].cep = msg;

        return[
            `Ok! Seu CEP foi anotado como *${banco.db[user].cep}*.`,
            `Agora precisamos que nos diga o *NÚMERO DA SUA CASA*:`,
            `**** Caso more em condomínio, por favor, inserir o bloco e o número do apartamento conforme o exemplo abaixo: ****`,
            `QUADRA 03 BLOCO 12 AP 202`,
        ]

    }

}

exports.execute = execute;