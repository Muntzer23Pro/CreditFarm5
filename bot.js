const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`فلوس فلوس كثير | Wings Community`);
}, 30)
})

client.login("NTI1NzY4MDQ2MjI1MTI5NDky.Dv7dGg.P2f4DDE_wK9Qg2aZMRwOPIkQsuc");
