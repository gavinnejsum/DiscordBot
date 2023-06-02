const createEmbed = require('../../../../../createEmbeds');

function crewTypeSelection(Discord, message, command, args) { 
  if (args.length > 0) {
    let embed

    switch (args) {
      case "Best Versatile":
        embed = createEmbed.createOfficerEmbed("D4 PVP Alternative 1");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Versatile without Harrison":
        embed = createEmbed.createOfficerEmbed("D4 PVP Alternative 2");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Error");
      case "Alternative vs Augur":
        embed = createEmbed.createOfficerEmbed("D4 PVP Alternative 3");

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
