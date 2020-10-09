const banco = require('../db')

function execute(user, msg, contato) {

    // Transformando a mensagem recebida para letra maiúscula para melhor validação
    msgUp = msg.toUpperCase();

    switch(msgUp){
        case '1': case "SIM": case "S": case "SI":
            banco.db[user].stage = 'defineChange'
            return [
                `Certo, já repassamos o endereço para o comprovante.`,
                `Nos diga, você vai precisar de troco?`,
                `1 - Sim\n2 - Não`,
            ]
            break;
        
        case '2': case "NÃO": case "N": case "NÃ":
            banco.db[user].stage = 'defineStreet'
            return [
                `Certo. Vamos refazer o processo.`,
                "Pedimos que insira o nome da sua *RUA ou AVENIDA*",
            ]
            break;

        default:
            return[
                `Escolha uma opção válida`
            ]
            break;

            
    }

}

exports.execute = execute;