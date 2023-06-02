require('dotenv').config();
const Discord = require('discord.js');
const { matchCommand } = require('./commands');

const client = new Discord.Client();
const prefix = '!';
const {TOKEN, TESTTOKEN, TESTCHANNELID, CHANNELID} = process.env;

client.login(TOKEN);
client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (!(message.channel.id.toString() === CHANNELID)) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  matchCommand(Discord, message, command, args);
});
