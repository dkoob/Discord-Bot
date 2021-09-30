const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

const inviteEmbed = {
	color: ("RANDOM"),
	title: 'Discord Bot Invite Link(s)',
	description: 'Use the invite link first then the Bot Permissions link!',
	fields: [
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
        {
			name: '**NOTICE**',
			value: ' | This Invite Link System currently does not work without me being in the server and being able to verify the bot client side myself. This will be fixed someday |',
		},
        {
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
        {
			name: 'Invite Link',
			value: ' | https://discord.com/oauth2/authorize?client_id=890731299952807937&scope=bot&permissions=8 |',
		},
		{
			name: 'Bot Permissions',
			value: ' | https://discord.com/oauth2/authorize?client_id=890731299952807937&scope=applications.commands&permissions=8 |',
		},
	],
	timestamp: new Date(),
};

module.exports = {
	data: new SlashCommandBuilder()
		
		.setName('invitelink')
		.setDescription('Provides you with our bots invite link!'),

	async execute(client, interaction) {
		await interaction.reply({embeds : [inviteEmbed]});
	},
}; 