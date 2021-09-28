// requires discord slashcommandbuilder constant
const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

const pingembed = new MessageEmbed()
        .setDescription("Pong!")
        .setColor("RANDOM")
        .setTimestamp()


// states if the slash command conatains ping it will reply with the word 'pong!'
module.exports = {
	data: new SlashCommandBuilder()
		
	// actual body of the command, everything above ATLEAST is required for every command
		.setName('ping')
		.setDescription('Replies with Pong!'),

	async execute(client, interaction) {
		await interaction.reply({embeds : [pingembed]});
	},
}; 