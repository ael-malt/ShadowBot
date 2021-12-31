require("module-alias/register");

//Requiered commands imports

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
//Required paths

const config = require("@root/config.json");
const loadCommands = require("@root/commands/load-commands");
const loadFeatures = require("@root/features/load-features.js");

const firstMessage = require("@util/first-message");
//BOT loader

client.on("ready", () => {
  console.log(`${client.user.username} è pronto`);
  const { prefix } = config;
  client.user.setActivity(`${prefix}help`, { type: "STA GIOCANDO A" });

  //Importing addons

  loadCommands(client);
  loadFeatures(client);
});
//Pass token to bot

client.login(config.token);
