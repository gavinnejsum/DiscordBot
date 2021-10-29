var getEvents = require('./getEvents.js');
const createEmbeddedMessages = require('./createEmbeds.js');
const editFunctions = require('./editFunctions.js');
const dayjs = require('dayjs');

module.exports = {

    matchCommand: function (Discord, message, command, args) {
        if (message.content.includes("cake")) {
            command = 'cake';
        }
        switch (command) {
            case 'event':
            case 'events':
                commandEvent(Discord, message, command, args);
                break;
            case 'help':
            case 'commands':
            case '?':
                message.channel.send(createEmbeddedMessages.createHelpEmbed());
                break;
            case 'cake':
                commandCake(Discord, message, command, args)
                break;
            case 'reaction':
                ReactionCommands(Discord,message,command,args);
                break;
            default:
                message.channel.send("No command specified.\n\n Type `!help` for current commands available");
        }

    },

};
function commandEvent(Discord, message, command, args) {
    currDayAndTime = dayjs(message.createdTimestamp);
    if (args.length > 0) {
        switch (args[0].toLowerCase()) {
            case 'in':
                args.shift();
                var embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime.add(args[0], 'day')), currDayAndTime.add(args[0], 'day'));
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case 'tomorrow':
                args.shift();
                var embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime.add(1, "day")), currDayAndTime.add(1, "day"));
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case 'next':
            case 'first':
                args.shift();
                var embed = getEvents.getNextEvent(editFunctions.ArgumentToString(args), currDayAndTime);
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
                }
            case 'today':
            case 'now':
                embed = createEmbeddedMessages.createDayScheduleEmbed(getEvents.getEventsEntireDay(currDayAndTime), currDayAndTime);
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case 'list':
            case 'all':
                args.shift(); // remove list command from str arr
                var embed = getEvents.getListOfEvent(editFunctions.ArgumentToString(args), currDayAndTime) //
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
                }
            case 'name':
            case 'names':
                var embed = createEmbeddedMessages.createNamesEmbed();
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Invalid event name listed. Please try again.\n\nType `!help` for additional help");
                }
            default:
                return message.channel.send("Something went wrong, \nno event command or a wrong event command was entered. Please try again.\n\nType `!commands` for additional help");
        }
    } else {
        return message.channel.send("Something went wrong, \nno event command or a wrong event command was entered. Please try again.\n\nType `!commands` for additional help");
    }
}
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

const categories =  [
    {
        emoji: '1️⃣',
        name: 'Officer XP',
        
    },
    {
        emoji:'2️⃣',
        name: 'Officer Recruit',
    },
    {
        emoji:'3️⃣',
        name:'Ship upgrade',
},
{
emoji:'4️⃣',
name:'Station upgrade'
},
{
emoji:'5️⃣'
name: 'Research'
}
]
function ReactionCommands(Discord, message, command, args) {
                currDayAndTime = dayjs(message.createdTimestamp);
                var embed = createEmbeddedMessages.reactionEmbed();
                if(embed!= null) { 
                    message.channel.send(embed).then((embedMsg) => {
                        // send reactions for each emojis
                        const emojis = categories.map((cat) => cat.emoji);
                        emojis.forEach((emoji) => embedMsg.react(emoji));
                        // the filter checks if the reaction emoji is in the categories
                        // it also checks if the person who reacted shares the same id
                        // as the author of the original message
                        const filter = (reaction, user) =>
                        emojis.includes(reaction.emoji.name) && user.id === message.author.id;
                        const collector = embedMsg.createReactionCollector(filter, {
                            // max number of reactions is the number of categories
                            max: '1',
                            // it won't accept reactions after 60 seconds
                            // optional, you can remove/change it
                            time: 20000,
                        });
                        collector.on('collect', (reaction, user) => {
                            // find the category by its emoji
                            const selectedCategory = categories.find(
                                (category) => category.emoji === reaction.emoji.name,
                                );
                                if (!selectedCategory) {
                                    return message.channel.send('Oops, there was an error... Try again?!');
                                }
                                commandEvent(Discord,message,command,["list",selectedCategory.name])
                                //commandEvent(Discord,message,command,[selectedCategory.name])
                                embedMsg.delete()
                              .catch(console.error);
                        });
                        collector.on('end', (collected, reason) => {
                          // reactions are no longer collected
                          // if the user clicked on every available emoji
                          
                            
                  
                          // if it's timeout
                          if (reason === 'limit') { 
                              return null;
                        }

                        return message.channel.send(`You took to long, so timing out, you gotta be faster next time ;)`);
                        });
                      });
                    }
                    
}



