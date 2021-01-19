require('dotenv').config();
var schedule = require('./schedule.js');
const ArrToString = require('./convertArrayToString.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const TOKEN = process.env.TOKEN;

client.login(TOKEN);


client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'ping') {

    message.reply('pong');
    const embed = new Discord.MessageEmbed()
    .setTitle('title')
    .setColor(0xff0000)
    .setDescription('Hello, this is a slick embed!')
    .addFields(
      { name: 'Regular field title', value:'d' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    );
    message.channel.send(embed); 
  }
});

client.on('message',message=>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);  
  const command= args.shift().toLowerCase(); 
  if(command === 'event') { 
    if(!args.length) {

      return message.channel.send(`you did not provide any arguments, ${message.author}!`)
    }

    
    var stringArgument = ArrToString.ArgumentToString(args);
    console.log(stringArgument);
    if(stringArgument == "Hello There") { 
      console.log(stringArgument);
    }
    var returnMessage = schedule.getOnlyNextEvent(stringArgument);
    console.log(returnMessage); 
    message.channel.send(`Command name: ${command}\nArguments: ${"hi"}`);

  }

});

