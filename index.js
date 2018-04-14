const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on  ("ready", function() {
    bot.user.setGame("Info-ChanBot | i!help");
    console.log("Le bot a bien été connecté");
});

bot.login("process.env.TOKEN");
