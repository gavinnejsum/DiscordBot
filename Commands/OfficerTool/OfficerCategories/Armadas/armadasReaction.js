const createEmbed = require('../../../../createEmbeds');

function crewTypeSelection(Discord, message, command, args) { 
  if (args.length > 0) {
    let embed
    let embed2

    switch (args) {
      case "Normal":
        embed = createEmbed.createOfficerEmbed("Armada 5");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Morale":
        embed = createEmbed.createOfficerEmbed("Armada Morale");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Borg":
        embed = createEmbed.createOfficerEmbed("Borg Armada");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Stella":
        embed = createEmbed.createOfficerEmbed("Stella Armada");
        embed2 = createEmbed.createOfficerEmbed("Stella Solo Armadas");

        if (embed !== null || embed2 !== null) {
          message.channel.send(embed2)

          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Swarms":
        embed = createEmbed.createOfficerEmbed("Swarm Armada");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      default:
        return message.channel.send("Name Error");
    }
  }

  return null
}

module.exports = { 
  crewTypeSelection
}
