var TelegramBot = require('node-telegram-bot-api');
var moment = require('moment');
var token = '611269794:AAH0UMvZW_s1mbdJIdOwrqRFkv4GWlxL4HU';
var bot = new TelegramBot(token, {polling: true});
var r1 = 'rch.jpg';
var r2 = 'r2.jpg';
var r3 = 'r3.jpg';



var opts1 = {
      	reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🌹Штучные цветы🌹',
            callback_data: '1'
          }
		    ],
		[       
		   {
            text: '💐Букеты от флориста💐 ',
            callback_data: '2'
          }
        ],
		[
		   {
            text: '🍭Букеты из сладостей🍭',
            callback_data: '3'
          }
        ],
		
		]}};

var opts3 = {
      	reply_markup: {
     keyboard: [
        [
          {
            text: 'Заказать',
            callback_data: 'zakaz'
          }
		    ]
		
		
		]}};

		
		
		
		
		
		

      
		   	var opts_zakaz_001 = {
      	reply_markup: {
      keyboardbutton: [
        [
          {
            text: 'Оформить заказ',
            callback_data: 'oformit_zakaz_001'
          }
		
		
		]]}};
	
		   				
		

	
bot.on('text', function(msg) {
console.log(msg);
var messageChatId = msg.chat.id;
var messageText = msg.text;
var username = msg.from.first_name

		

		

		
        if (messageText == '/start' || messageText == '/start@uzgullarbot' ) {
	  bot.sendMessage(messageChatId, msg.from.first_name + ' Для того что бы выбрать понравившийся Вам букет просто пройдите в интерисующую Вас категорию и оформите заказ', opts1);

	    }
		

    else {
            
    }
	;
  
  
});




bot.on('callback_query)', (cb) => {
    console.log(cb);
});

bot.on('callback_query', function (msg) {
	console.log(msg);
	var answer = msg.data;
	var user = msg.data.username;
	
	
	 if (answer == '1') {
      bot.sendMessage(msg.from.id, ' Черная роза- Этот таинственный и элегантный цветок выделяется среди своего семейства не только цветом но и мягкой бархатистостью лепестков');
		 bot.sendPhoto (msg.from.id,r1, {caption: 'Номер лота #001\nРоза чёрная \nЦена 20 000 сум /шт\n'});
		 bot.sendPhoto (msg.from.id,r2, {caption: 'Номер лота #002\nРоза "Джумилия"\n Цена 18 000 сум /шт\n'});
		bot.sendPhoto (msg.from.id,r3, opts_zakaz_001,{caption: 'Номер лота #003\nРоза оранжевая "Вау"\nЦена 15 000 сум /шт\n'});
            
    }
	  
	   if (answer == 'oformit_zakaz_001') {
        bot.sendMessage(msg.from.id, ' Для того что бы завершить  отправьте мне сообщение с пометкой "Заказ" указав свой номер телефона и номер выбранного лота  ');
	
		
            
    }
	
	if (answer == 'zakaz') {
        bot.sendMessage(msg.from.id, ' Для того что бы завершить  отправьте мне сообщение с пометкой "Заказ" указав свой номер телефона и номер выбранного лота  ');
	
		
            
    }
	

});



