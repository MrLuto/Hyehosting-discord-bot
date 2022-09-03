const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("You do not have permissions for this yet!")

    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 
 

    message.channel.send(sayMessage);
return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "bd"
}