const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

bot.on('ready', () => {
    console.log("Success!");
    bot.user.setPresence({
        activity: {
            type: "WATCHING",
            name: `Over Alpha Builders Group: ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members`
        }
    });
});

bot.login(process.env.token);