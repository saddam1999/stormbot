const Discord = require('discord.js');


const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '-Help') {
	  message.channel.send('If you are having issues, make sure you have .NET 4.6 & iTunes installed. If that does not work, create a ticket in <#736585335856693269>.')
	}
  });

  
client.on('message', message => {
	if (message.content === '-help') {
	  message.channel.send('If you are having issues, make sure you have .NET 4.6 & iTunes installed. If that does not work, create a ticket in <#736585335856693269>.')
	}
  });

client.on('message', message => {
if (message.content === 'register') {
	
	message.channel.send('Register your device at https://St0rm.co. If a certain payment method such as PayPal is blocked in your country, contact an admin to pay with something else.');
}
});

client.on('message', message => {
if (message.content === '-about') {
	
	message.channel.send('I am St0rm Bot! I am made by <@(clientid)>.');
}
});

client.login('token goes here')
