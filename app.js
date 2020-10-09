const bot = require("venom-bot")
const banco = require('./src/db')
const stages = require('./src/models/Stage')

bot.create().then((client) => start(client));

function start(client) {
    client.onMessage( async (message) => {
        let resp = stages.step[getStage(message.from)].obj.execute(
            message.from,
            message.body,
            message.sender.pushname
        );
        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];

            //Enviando as mensagens
            await client.sendText(message.from, element)
                .then((result) => {
                   /*  console.log(result) */                 
                })
                .catch((err) => {
                    console.error("ERRO: ", err)
                });
        }
    });
}

function getStage(user) {
    if (banco.db[user]) {
        return banco.db[user].stage;
    } else {
        banco.db[user] = {
            stage: 0,
            itens: [],
        };
        return banco.db[user].stage;
    }
}

