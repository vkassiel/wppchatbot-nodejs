const banco = require('../db')
const cardapio = require('../models/Carte')

// Mensagens
msgEscolha = 'Escolha de acordo com a numeração localizada à esquerda do nome de cada pizza!';

function execute(user, msg, contato) {

    // Transformando a mensagem recebida para letra maiúscula para melhor validação
    msgUp = msg.toUpperCase();


    switch (msgUp) {

        case "1":
        case "FAZER PEDIDO":
        case "PEDIDO":
            let menu = " *CARDÁPIO*\n\n";

            Object.keys(cardapio.menu).forEach((value) => {
                let element = cardapio.menu[value];

                //Mensagem que mostra opções do cardápio
                menu += `*${value}*. *Pizza de ${element.sabor}* [*${element.tamanho}*] – R$ ${element.preco} \n\n`;
            })

            // Passando adiante pro próximo estágio de pedido
            banco.db[user].stage = 2;

            // Mensagem inicial de anúncio do cardápio
            return [
                `Legal! Segue abaixo então nosso cardápio do dia de hoje:`,
                menu,
                msgEscolha,
            ];
            break;

        case "2":
        case "HORARIO":
        case "FUNCIONAMENTO":
            banco.db[user].stage = 0;

            return [
                alerta,
                `Abaixo segue nosso horário de funcionamento e entrega durante os dias da semana.`,
                `*Terça a Sexta* - 18h às 22h\n*Sábado e Domingo* - 18h às 01h`,
                `Digite qualquer coisa para retornar ao início`
            ]
            break;

        default:
            return [
                `*Opção inválida!* Você deve escolher entre as duas opções acima`
            ]
            break;

    }

}

exports.execute = execute;