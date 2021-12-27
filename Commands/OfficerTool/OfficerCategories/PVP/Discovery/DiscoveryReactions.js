const editFunctions = require('../../../../../editFunctions.js');
const createEmbed = require('../../../../../createEmbeds.js');

function crewTypeSelection(Discord, message, command, args) { 
    if(args.length > 0)
    {
        if(Array.isArray(args)) {
            input = editFunctions.ArgumentToString(args);
        }
        switch (args) {
            case "Summoning":
                var embed = createEmbed.createOfficerEmbed("Discovery");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "PVP Alternative 1":
                var embed = createEmbed.createOfficerEmbed("Discovery PVP Alternative 1");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "PVP Alternative 2":
                var embed = createEmbed.createOfficerEmbed("Discovery PVP Alternative 2");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "PVP Alternative 3":
                var embed = createEmbed.createOfficerEmbed("Discovery PVP Alternative 3");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            default:
                return message.channel.send("Name Error");    
        }
    }
}
module.exports = { 
    crewTypeSelection
}