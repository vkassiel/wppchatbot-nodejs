const banco = require('../db')
const cardapio = require('../models/Carte')

function execute(user, msg, contato) {

    // Transformando a mensagem recebida para letra maiúscula para melhor validação
    msgUp = msg.toUpperCase();

    switch (msgUp) {
        case "CONTINUAR":
            // Manda o usuário para o estágio de definir o nome da rua
            banco.db[user].stage = 'defineStreet';

            return [
                `${banco.db[user].nome}, agora precisamos que nos forneça os dados do seu endereço para que possamos fazer a entrega na pizza na sua casa.`,
                "Primeiramente pedimos que insira o *NOME DA SUA RUA*:",
            ]
            break;

        case "CANCELAR":
            banco.db[user].stage = 0;
            return [
                "Ah.. Pedido cancelado com sucesso! :(",
            ];
            break;
    }

    // Se o código informado na mensagem não tiver no catálogo
    if (!cardapio.menu[msg]) {
        return [
            `OPA! Parece que o código que você digitou está incorreto. Digite novamente.`,
            `Ou você pode digitar *CANCELAR* para cancelar o pedido`
        ];
    };

    // Puxa o código informado diretamente do cardápio e armazena nos itens
    banco.db[user].itens.push(cardapio.menu[msg]);

    // Salvando no banco o pedido
    banco.db[user].itens.codigo = cardapio.menu[msg]
    banco.db[user].itens.sabor = cardapio.menu[msg].sabor;
    banco.db[user].itens.preco = cardapio.menu[msg].preco;
    banco.db[user].itens.tamanho = cardapio.menu[msg].tamanho;

    return [
        /* `Você selecionou a Pizza de ${cardapio.menu[msg].sabor} no valor de R$ ${cardapio.menu[msg].preco} com sucesso!`, */
        `Você selecionou a *Pizza de ${banco.db[user].itens.sabor}* no *valor de R$ ${banco.db[user].itens.preco}* e nós já anotamos aqui! `,
        `Agora, digite *CONTINUAR* para continuar com seu pedido ou *CANCELAR* para cancelar e voltar ao início.`
    ]

}

exports.execute = execute;