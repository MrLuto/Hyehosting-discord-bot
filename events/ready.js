const discord = require("discord.js");
const botConfig = require("../config/botconfig");
const bot = new discord.Client();
bot.commands = new discord.Collection();
bot.on("ready", async () => {

    console.log(`Username: ${bot.user.username} botUsers: ${bot.users.size} guilds: ${bot.guilds.size} is online en klaar om te gebruiken!`)
    setInterval(async () => {
        const statuslist = [
            ` ${bot.users.size} Unieke gebruikers! `,
            'Beta versie',
            'gekke info dit',
            'Type !help om te starten!',
            'Type !reviews voor alle reviews!',
            ` ${bot.guilds.size} discord servers!`,
        ];
        /*console.log(statuslist);*/
        const random = Math.floor(Math.random() * statuslist.length);

        try {
            await bot.user.setPresence({
                game: {
                    name: `${statuslist[random]}`,
                    type: 'WATCHING',
                },
                status: 'idle',
            });
        }
        catch (error) {
            console.error(error);
        }
        // 15000MS nooit aanpassen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }, 15000);

})