const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Vang het idee op.
    var idee = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!idee) return message.channel.send("please provide an idea.");
 
    // Maak het embed aan.
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("New Idea ")
        .setColor("#00FF00")
        .addField("Idee: ", idee)
        .addField("Submitted by: ", message.author);
 
    // Vind het kanaal.
    var ideeChannel = message.guild.channels.find(`name`, "idea");
    if (!ideeChannel) return message.guild.send("Cannot find the channel");
 
    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
 
    // Einde.
 
}
 
module.exports.help = {
    name: "idee",
    description: "Do you have an idea. Then put it here and maybe we will apply it."
}