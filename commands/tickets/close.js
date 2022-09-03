const discord = require("discord.js");

module.exports.run = async (bot, message, arguments, guild) => {

    if(!message.channel.name.startsWith('ticket-')) { // // !message.channel.name.length() == 15 &&
        if(config.useEmbeds) {
          const notTicket = new discord.RichEmbed()
              .setColor("#E74C3C")
              .setDescription(`:x: **This command can only be used in a ticket channel!**`)
          return message.channel.send(notTicket);
        } else {
            return message.channel.send(`:x: **This command can only be used in a ticket channel!**`)
        }
      } else {
        try {
          message.channel.delete()
          // log
        //   if(config.useEmbeds) {
        //     const embed = new Discord.RichEmbed()
        //       .setAuthor(`${bot.user.username} / Ticket Log`, bot.user.avatarURL)
        //       .setTitle("Ticket Closed")
        //               .setColor(config.colour)
        //       .addField("Username", message.author, true)
        //       .addField("Channel", message.channel.name, true)
        //       .setFooter(`DiscordTickets`)
        //               .setTimestamp();
        //   }
    
        } catch(error) {
          log.error(log.colour.red(error));
        }
      }

}

module.exports.help = {
    name: "close"


}