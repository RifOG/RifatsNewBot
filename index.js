const TelegramApi = require('node-telegram-bot-api')

const token = "1704478368:AAEArN3n8smL_aL6HFfURJcCTpPa4DaUdHI"

const bot = new TelegramApi(token, {polling: true})



const start = () => {
    bot.setMyCommands ([
        {command : '/start', description: 'Greeting'},
        {command : '/info', description: 'Main information about user'},
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
         if (text === '/start') { 
            await bot.sendMessage(chatId, `Welcome to my crib!`);
            return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp');
        }
        if (text === '/info') {
           return bot.sendMessage(chatId, `Your name is ${msg.from.first_name}`);
        }
        return bot.sendMessage(chatId, `Sorry, try again please!`)
    })
    
}

start()