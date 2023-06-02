const createEmbed = require('../../../../../createEmbeds');

function crewTypeSelection(Discord, message, command, args) { 
  if (args.length > 0) {
    let embed

    switch (args) {
      case "Versatile and good vs Morale":
        embed = createEmbed.createOfficerEmbed("Augur PVP Alternative 1");

        if (embed != null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Augur | CrewTypeSelection | Error");
      case "vs Jelly":
        embed = createEmbed.createOfficerEmbed("Augur PVP Alternative 2");

        if (embed !== null) {
          return message.channel.send(embed);
        }

        return message.channel.send("Augur | CrewTypeSelection | Error");
      default:
        return message.channel.send("Name Error");
    }
  }

  return null
}
module.exports = { 
    crewTypeSelection
}
