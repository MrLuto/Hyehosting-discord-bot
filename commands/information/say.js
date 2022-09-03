const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions for this yet!")

    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 
 

    var botEmbed = new discord.RichEmbed()
    .addField("Alert!", sayMessage);
return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "say"
}