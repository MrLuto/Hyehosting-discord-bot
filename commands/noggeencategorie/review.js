const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // Aantal sterren opvragen.
    const aantalSterren = args[0];

    // Nakijken als men een getal meegeeft, of als men een getal tussen 1 en 5 opgeeft.
    if (!aantalSterren || aantalSterren < 1 || aantalSterren > 5) return message.channel.send("Enter some stars! Choose between 1 and 5.");

    // Nakijken als je een bericht hebt meegegeven.
    const bericht = args.splice(1, args.length).join(' ') || '**No message given**';

    // Kanaal waar reviews inkomen opzoeken.
    var reviewChannel = message.guild.channels.find('name', '《🌟》reviews');
    // als kanaal niet is gevonden geef een bericht.
    if (!reviewChannel) return message.channel.send("Channel not found");

    var sterren = "";
    // Voor ieder aantal sterren gaan we deze tekst aanmaken.
    for (var i = 0; i < aantalSterren; i++) {

        sterren += ":star: ";

    }

    // Verwijder het bestaande bericht.
    message.delete();

    // Maak de review aan met het aantal sterren en het berichtje.
    const review = new discord.RichEmbed()
        .setTitle(`${message.author.username} wrote a review! :tada:`)
        .setColor("#00ff00")
        .addField("Stars:", `${sterren}`)
        .addField("Review:", `${bericht}`);

    // Zend bericht naar de gebruiker dat hij een review heeft aangemaakt.
    message.channel.send(":white_check_mark: You have successfully written a review!");
    // Zend het bericht in het review kanaal.
    return reviewChannel.send(review);

}

module.exports.help = {
    name: "review",
    description: "review command."
}