const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`فلوس فلوس كثير | Wings Community`);
}, 30)
})

client.login("NTI5MjQ5MDYxNzExMzgwNTIw.DwuG2w.LnBW0FH2RQ2HC990oQdEmJae3j8");
