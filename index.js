// allows you to access environmental variables by importing them (hidden tokens / api tokens)
// requiring the node fs (node filliing system)
// requiring the node discord.js to actually compile any code
// constant that defines the client command - needed in new discord.js update
// respectively
require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS ] });

// logs in with the token provided in .env file
client.login(process.env.TOKEN) 

// announces in terminal when client successfully logs in
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('poorly formated js code')
  });

  client.on('debug', console.log)
      .on('warn', console.log)



  client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    const { commandName } = interaction;
  
    const command = client.commands.get(interaction.commandName);
    console.log(command, commandName);

	if (!command) return;

	try {
		await command.execute(client, interaction);
	} catch (error) {
		console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

  // defines a new collection for commands - adds a filter so that the command file has to end with .js
    client.commands = new Collection();
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      // Set a new item in the Collection
      // With the key as the command name and the value as the exported module
      client.commands.set(command.data.name, command);
    }