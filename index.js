const Discord = require("Discord.js");

var bot = new Discord.Client();

bot.on("message", function(message) {
    console.log(message.content);
});

bot.login(process.env.BOT_TOKEN);
