const banco = require('../../db')

function execute(user, msg, contato) {

    // Transformando a mensagem recebida para letra maiúscula para melhor validação
    msgUp = msg.toUpperCase();

    switch(msgUp){
        case '1': case "SIM": case "S": case "SI":
            banco.db[user].stage = 4; // Payment / Pagamento
            return[
                `Você precisa de troco pra quanto?`
            ]
            break;

        case '2': case "NÃO": case "N": case "NÃ":
            banco.db[user].stage = 5; // Comprovante / Receipt
            return[
                `Tudo bem então. `,
                `Por fim escolha entre as opções abaixo:\n\n1 - Finalizar pedido e mostrar comprovante\n2 - Cancelar pedido`,
            ]
            break;

        default:
            return[
                `Você precisa escolher uma opção válida.`
            ]
            break;
    }

}

exports.execute = execute;