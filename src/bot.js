require("dotenv").config();
const { token, databaseToken } = process.env;
const { connect } = require('mongoose');
const { Client, Collection, GatewayIntentBits, Partials, Discord } = require("discord.js");
const fs = require("fs");
const err = require("./events/mongo/err");



const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
	],
  partials: [
    Partials.Channel,
  ],
});
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

// const cron = require('node-cron');

// client.once('ready', async () => {
//   console.log('Scheduler on.')

//   try {
//     await cron.schedule('0 17 * * SAT [ $(expr $(date +%W) % 2) -eq 1 ]', () => {
//       client.channels.cache.get('1122574678964314172').send('> <:coatofarms:970613122459107349> **Voting has begun** for the House of Assembly. <@578307132609527810>');
//     });
//   } catch (error) {
//     common.error('Error trying to send: ', error);
//   }
// });

client.handleEvents();
client.handleCommands();
client.login(token);
(async () => {
  await connect(databaseToken).catch(console.error);
})();