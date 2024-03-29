require('dotenv').config();
const Discord = require('discord.js');
const { matchCommand } = require('./commands.js');
const client = new Discord.Client();
const prefix = '!';
const TOKEN = process.env.TOKEN;
const TESTTOKEN = process.env.TESTTOKEN;
const TESTCHANNELID = process.env.TESTCHANNELID;
const CHANNELID = process.env.CHANNELID;


client.login(TOKEN);
client.once('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
    
});

client.on('message', function (message) {
    if (!(message.channel.id.toString() === CHANNELID)) return; 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    matchCommand(Discord, message, command, args);
});
