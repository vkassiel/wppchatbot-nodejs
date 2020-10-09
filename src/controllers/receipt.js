const banco = require('../db')

function execute(user, msg, contato) {

    var taxa = 5;
    var total = banco.db[user].itens.preco + taxa;


    switch(msg){
        // Se optar por finalizar pedido e mostrar comprovante
        case "1":
            return[
                    `PEDIDO FINALIZADO COM SUCESSO! ✅`,
                    `*COMPROVANTE DO PEDIDO*\nCliente: ${banco.db[user].nome}\n\n *DADOS DO ENDEREÇO*\n– Logradouro: ${banco.db[user].rua} - ${banco.db[user].numero}\n– Bairro: ${banco.db[user].bairro}\n– CEP: ${banco.db[user].cep}\n\n*DADOS DO PEDIDO*\n– Descrição: Pizza de ${banco.db[user].itens.sabor} – *TAM. ${banco.db[user].itens.tamanho}*\n– Valor do pedido: R$ ${banco.db[user].itens.preco}\n\nTaxa de entrega: R$ ${taxa}\n\n– *VALOR TOTAL A PAGAR DO PEDIDO*: R$ ${total}\n\n– *OBS.: Troco para R$ ${banco.db[user].troco}`,
                    `Aguarde que entre 45-60min o pedido será entregue em seu endereço.`,
                    `Caso tenha alguma dúvida ou reclamação entre em contato conosco através do link abaixo:`,
                    `https://api.whatsapp.com/send?phone=558699359398&text=Me%20ajude!%20Tem%20um%20problema%20com%20minha%20pizza`,
                  ]
            break;

        case "2":
            banco.db[user].stage = 0;
            return[
                `*PEDIDO CANCELADO COM SUCESSO!*`
            ]
            break;

        default: 
            return [
                `Você precisa escolher uma das opções acima:`
            ]
            break;
    }
    
}

exports.execute = execute;