const editFunctions = require('../../../../../editFunctions.js');
const createEmbed = require('../../../../../createEmbeds.js');

function crewTypeSelection(Discord, message, command, args) { 
    if(args.length > 0)
    {
        if(Array.isArray(args)) {
            input = editFunctions.ArgumentToString(args);
        }
        switch (args) {
            case "Best Versatile":
                var embed = createEmbed.createOfficerEmbed("D4 PVP Alternative 1");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
                case "Versatile without Harrison":
                var embed = createEmbed.createOfficerEmbed("D4 PVP Alternative 2");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
                case "Alternative vs Augur":
                var embed = createEmbed.createOfficerEmbed("D4 PVP Alternative 3");
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