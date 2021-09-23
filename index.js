// allows you to access environmental variables by importing them (hidden tokens / api tokens)
// requiring the node discord.js to actually compile any code
// constant that defines the client command - needed in new discord.js update
// respectively
require('dotenv').config();
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// logs in with the token provided in .env file
client.login(process.env.TOKEN) 


// announces in terminal when client successfully logs in
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
