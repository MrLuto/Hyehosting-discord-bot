const discord = require("discord.js");

module.exports.run = async (bot, message, arguments, guild) => {

            let help1 = new discord.RichEmbed()
                .setDescription(`This is the ***${bot.user.username}*** help menu!`)
                .addField("minigames", "!rps, !cf, !ping")
                .addField("moderation", "!kick, !ban")
                .addField("music", "#soon")
                .addField("tickets", "!create, !close")
                .addField("giveaway", "!giveaway [winnercount] [time] [what can they win?]")
                .addField("other", "!say !review [stars] [review] !idee [idee]")
                .setColor('#fc0400')
                .setFooter(`Made by pvplogger#7777`);
            message.channel.send(help1);

}

module.exports.help = {
    name: "help"


}