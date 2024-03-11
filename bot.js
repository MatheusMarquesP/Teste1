const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const token = '7040111144:AAGWTr4iJZxYj4qKBz9wVPCYD3o6-A0G8yI';

// Cria um bot que usa 'polling' para buscar novas atualizações
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
// 'msg' é a mensagem recebida do Telegram
// 'match' é o resultado da execução da regexp acima no conteúdo do texto
//da mensagem

  const chatId = msg.chat.id;
  const resp = match[1]; // o capturado "tanto faz"

// envia de volta o "tanto faz" correspondente para o chat
  bot.sendMessage(chatId, resp);
});

// Ouça qualquer tipo de mensagem. Existem diferentes tipos de
// mensagens.
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Bem Vindo");
    });

bot.onText(/\/sendpic/, (msg) => {
        bot.sendPhoto(msg.chat.id,"https://static.wikia.nocookie.net/fiction-battlefield/images/3/34/Baki_render_2018.png/revision/latest?cb=20191230072502&path-prefix=pt-br" );

        });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
// envia uma mensagem para o chat confirmando o recebimento da mensagem
  var ola = "ola";
  var tchau = "tchau";

if (msg.text.toString().toLowerCase().indexOf(ola)==0) {
bot.sendMessage(msg.chat.id,"Olá");
}

if (msg.text.toString().toLowerCase().includes(tchau)) {
bot.sendMessage(msg.chat.id, "Tchau");
}
  // Salvar a mensagem em um arquivo .txt
  fs.appendFile('mensagens.txt', msg.text + '\n', (err) => {
      if (err) throw err;
      console.log('Mensagem salva no arquivo');
  });
});

