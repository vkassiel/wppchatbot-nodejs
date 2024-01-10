# WhatsApp Chatbot - Node.js

Esse é um chatbot para WhatsApp feito para um trabalho de faculdade. 

O objetivo desse bot é simular o atendimento online de uma pizzaria. Por hora, só possui armazenamento de dados em memória.


### Instalação

- Nosso chatbot requer [Node.js](https://nodejs.org/) v12.x.x+ para rodar

Entre na pasta do projeto:
```sh
$ cd nodebot-wpp
```

Instale as dependências:
```sh
$ npm install
```
Logo após instalar as dependências, basta dar um:
```sh
$ npm start
```

### Conexão
Assim que a aplicação iniciar, aparecerá um Código QR para que você possa fazer o vínculo com um WhatsApp (o do estabelecimento que quer que seja automático). Deverá aparecer a seguinte mensagem no terminal:
```sh
Scan QR for Session: session
```

Para isso, basta no aplicativo do WhatsApp em seu smartphone, ir na opção de WhatsApp Web e fazer a leitura do código. Assim que a autenticação for feita com sucesso no BOT, ele deve mostrar uma sequência de mensagens semelhante a essas no terminal:
```sh
✓ Authenticated
✓ headless option is active, browser hidden
✓ Starting With Success!
✓ Token saved successfully...
```

Agora, basta mandar a mensagem de algum outro celular para o WhatsApp que você cadastrou que ele deverá responder com a lógica implementada no código!

### Plugins 
Utilizamos apenas o plugin [venom-bot](https://www.npmjs.com/package/venom-bot) para fazer a conexão com o WhatsApp para a execução do chatbot.