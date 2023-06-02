const createEmbed = require('../../createEmbeds');
const editFunctions = require('../../editFunctions');
const officerReaction = require ('./officerReaction');
const pvpReaction = require('./OfficerCategories/PVP/PVPReaction');

function officerCommand(Discord, message, command, args) {
  let embed
  let embed2

  if (args.length > 0) {
    let input

    if (Array.isArray(args)) {
      input = editFunctions.ArgumentToString(args);
    }

    switch (input) {
      case "armada":
      case "armadas":
        officerReaction.chooseType(Discord, message, command, args);

        break;
      case "borg":
      case "borgs":
        officerReaction.chooseType(Discord, message, command, args);

        break;
      case "disco":
        officerReaction.chooseType(Discord, message, command, args);

        break;
      case "swarm":
      case "swarms":
        officerReaction.chooseType(Discord, message, command, args);

        break;
      case "stella":
        officerReaction.chooseType(Discord, message, command, args);

        break;
      case "pvp":
        pvpReaction.PVPTypeSelection(Discord,message,command,args);

        break;
      case "ent":
      case "enterprise":
      case "enterprise pvp":
      case "pvp enterprise":
      case "ent pvp":
      case "pvp ent":
        officerReaction.chooseType(Discord, message, command, "enterprise");

        break;
      case "augur":
      case "augur pvp":
      case "pvp augur":
        officerReaction.chooseType(Discord, message, command, "augur");

        break;
      case "d4":
      case "d4 pvp":
      case "pvp d4":
        officerReaction.chooseType(Discord, message, command, "d4");

        break;
      case "normal armada":
      case "armada normal":
        embed2 = createEmbed.createOfficerEmbed("Armada Morale");
        embed = createEmbed.createOfficerEmbed("Armada 5");

        if (embed != null) {
          message.channel.send(embed2);

          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "discovery":
      case "primary borg":
      case "borg primary":
      case "best borg":
      case "borg best":
        embed = createEmbed.createOfficerEmbed("Borg Primary");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "borg secondary":
      case "secondary borg":
        embed = createEmbed.createOfficerEmbed("Borg Secondary");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "borg armada":
      case "armada borg":
        embed = createEmbed.createOfficerEmbed("Borg Armada");

        if (embed != null) {
            return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "swarm primary":
        embed = createEmbed.createOfficerEmbed("Swarms Primary");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "swarms secondary":
      case "swarm secondary":
      case "secondary swarm":
        embed = createEmbed.createOfficerEmbed("Swarms Secondary");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "swarm armada":
      case "armada swarm":
        embed = createEmbed.createOfficerEmbed("Swarm Armada");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "para bellum":
      case "pb":
        embed = createEmbed.createOfficerEmbed("Para Bellum");
        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "heavies":
      case "heavy transports":
      case "ent heavy":
      case "augur heavy":
      case "heavy transporters":
      case "heavy transporter":
        embed = createEmbed.createOfficerEmbed("Heavy Transporters Enterprise");
        embed2 = createEmbed.createOfficerEmbed("Heavy Transporters Augur")

        if (embed !== null && embed2 !== null) {
          message.channel.send(embed2);

          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "stella armada":
      case "armada stella":
        embed = createEmbed.createOfficerEmbed("Stella Solo Armadas");
        embed2 = createEmbed.createOfficerEmbed("Stella Armada")

        if (embed !== null && embed2 !== null) {
          message.channel.send(embed);

          return message.channel.send(embed2);
        }

        return message.channel.send("Error");
      default:
        return message.channel.send("Officer Tool | Name Error");
    }
  }

  return null;
}

module.exports = { 
  officerCommand,
}
