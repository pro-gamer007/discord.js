/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable strict */
const now = Date.now();
const Discord = require('../src/index');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.token);

client.on('debug', data => {
	console.log(data);
});

client.once('ready', () => {
	console.log(`${client.user.username} is now online!`);
	console.log(`Ready after ${(Date.now() - now) / 1000} seconds`);
});

client.on('message', async message => {
	if (message.content === 'ping') {
		const m = await message.channel.send('Pinging....');
		message.channel.send(`**Message Latency:** ${m.createdTimestamp - message.createdTimestamp}ms\n**WS Latency:** ${client.ws.ping}ms`);
	}
});
