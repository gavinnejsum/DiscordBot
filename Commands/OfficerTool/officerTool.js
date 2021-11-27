const createEmbed = require('../../createEmbeds');
const editFunctions = require('../../editFunctions.js');



function officerCommand(Discord, message, command, args) {
    if(args.length > 0)
    { 
        input = editFunctions.ArgumentToString(args);
        switch (input) {
            case "armada":                
                var embed2 = createEmbed.createOfficerEmbed("Armada Morale");
                var embed = createEmbed.createOfficerEmbed("Armada 5");
                if (embed != null) {
                    message.channel.send(embed2);
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
                
            case "discovery":
            case "disco":
               
                var embed = createEmbed.createOfficerEmbed("Discovery");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "borg":
            case "primary borg":
            case "borg primary":
            case "best borg":
            case "borg best":
                var embed = createEmbed.createOfficerEmbed("Borg Primary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "borg secondary":
            case "secondary borg":
                var embed = createEmbed.createOfficerEmbed("Borg Secondary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "borg armada":
            case "aramda borg":
                var embed = createEmbed.createOfficerEmbed("Borg Armada");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "swarm":
            case "swarms":
            case "swarm primary":
                var embed = createEmbed.createOfficerEmbed("Swarms Primary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "swarms secondary":
            case "swarm secondary":
            case "secondary swarm":
                var embed = createEmbed.createOfficerEmbed("Swarms Secondary");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                } 
            case "swarm armada":
            case "armada swarm": 
            var embed = createEmbed.createOfficerEmbed("Swarm Armada");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "para bellum":
            case "pb":
            
                var embed = createEmbed.createOfficerEmbed("Para Bellum");
                if (embed != null) {
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "heavies":
            case "heavy transports":
            case "ent heavy":
                var embed = createEmbed.createOfficerEmbed("Heavy Transporters Enterprise");
                var embed2 = createEmbed.createOfficerEmbed("Heavy Transporters Augur")
                if (embed != null && embed !=null) {
                    message.channel.send(embed2);
                    return message.channel.send(embed);
                } else {
                    return message.channel.send("Error");
                }
            case "stella armada":
            case "armada stella":
                var embed = createEmbed.createOfficerEmbed("Stella Solo Armadas");
                var embed2 = createEmbed.createOfficerEmbed("Stella Armada")
                if (embed != null && embed !=null) {
                    message.channel.send(embed);
                    return message.channel.send(embed2);
                } else {
                    return message.channel.send("Error");
                }
            default:
                return message.channel.send("Name Error");
                
        }

    }



}



module.exports = { 
    officerCommand
}