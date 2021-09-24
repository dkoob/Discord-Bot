// requires discord slashcommandbuilder constant
const { SlashCommandBuilder } = require('@discordjs/builders');

// states if the slash command conatains ping it will reply with the word 'pong!'
module.exports = {
	data: new SlashCommandBuilder()
		
	// actual body of the command, everything above ATLEAST is required for every command
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};