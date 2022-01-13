const categories = require('./Commands/Reaction/categories.json')
const reaction = require('./Commands/Reaction/reactions.js');
const events = require('./Commands/Events/events.js');
const officerTool = require('./Commands/OfficerTool/officerTool.js');
const createEmbeddedMessages = require('./createEmbeds.js');
const dayjs = require('dayjs');

module.exports = {

    matchCommand: function (Discord, message, command, args) {
        if (message.content.includes("cake")) {
            command = 'cake';
        }
        switch (command) {
            case 'event':
            case 'events':
                events.commandEvent(Discord, message, command, args);
                break;
            case 'help':
            case 'commands':
            case '?':
                message.channel.send(createEmbeddedMessages.createEventHelpEmbed());
                message.channel.send(createEmbeddedMessages.createOfficerHelpEmbed());
                break;
            case 'cake':
                commandCake(Discord, message, command, args)
                break;
            case 'r':
                reaction.chooseEventName(Discord, message, command, args);
                break;
            case 'officer':
            case 'officers':
            case 'crews':
            case 'crew':
            case 'o':
                officerTool.officerCommand(Discord, message, command, args);
                break;
            default:
                message.channel.send("No command specified.\n Type `!help` for current commands available");
        }

    }

};

function commandCake(Discord, message, command, args) {
    if (args.length > 0) {
        if (message.content.includes('facts') || message.content.includes('fact')) {


            randomInt = Math.floor(Math.random() * 6);
            switch (randomInt) {
                case 0:
                    return message.channel.send("\nFun cake fact: One of the biggest ever birthday cakes was almost as heavy as an elephant :elephant:")
                case 1:
                    return message.channel.send("\nFun cake fact: The first birthday cake was originally a cake given as an offering on a person’s birthday. The first reference to ‘birthday cake’ came in 1785");
                case 2:
                    return message.channel.send("Fun cake fact: The word ‘cake’ comes from Middle English kake, and is probably a borrowing from Old Norse.");
                case 3:
                    return message.channel.send("Fun cake fact: In Swedish the word for cake is 'kaka' but the word 'tårta' is also used in the same way")
                case 4: 
                    return message.channel.send("Fun cake fact: Queen Victoria was one of the first to have pure white icing on her wedding cake. That’s why it’s called “royal icing.")
                case 5: 
                    return message.channel.send("Fun cake fact: For tax purposes, the essential difference between cakes and biscuits is that cakes go hard but biscuits go soft.")
                case 6: 
                    return message.channel.send("The world record for cupcake eating is 72 in six minutes and was set by Patrik Bertoletti in 2012.")
                default:
                    return message.channel.send("Cake machine broke :( ");
            }
        } else {
            message.channel.send("Everyone deserves some cake :cake:");
        }
    }
    else {
        message.channel.send("Everyone deserves some cake :cake:");
    }

}




