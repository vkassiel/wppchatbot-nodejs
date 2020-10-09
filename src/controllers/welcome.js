const banco = require('../db')

function execute(user, msg, contato) {
    
    banco.db[user].stage = 'defineName';

    return [
        `Olá, bem-vindo(a) ao atendimento via WhatsApp da *Baralho's 🃏 Pizzaria*.`,
        `Para iniciar nossa conversa, qual é o seu nome? 🤔`,
    ];
}

exports.execute = execute;