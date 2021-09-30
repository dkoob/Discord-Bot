require('dotenv').config();
const discord = require('discord.js')
const { Client, MessageEmbed, Intents, Permissions } = require('discord.js')
const client = new discord.Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS ] });
const { SlashCommandBuilder } = require('@discordjs/builders');
var guild = client.guilds.cache.get(process.env.GUILDID)

const embedStaffHelp = {
	color: 0x0099ff,
	title: 'List of Commands',
	author: {
		name: 'kyuu#0001',
		icon_url: 'https://i.imgur.com/JfFsczj.jpeg',
	},
	description: 'Shows the list of all valid staff commands',
	fields: [
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
        {
			name: '**STAFF COMMANDS**',
			value: 'All commands available to every member',
		},
        {
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
        {
			name: 'Staff Help',
			value: 'This List **|** Usage: /staffhelp',
		},
		{
			name: 'Kick',
			value: 'Kicks the specified member **|** Usage: /kick [member] [reason]',
		},
        {
			name: 'Ban',
			value: 'Bans the specified member **|** Usage: /ban [member] [reason]',
        }
    ],
	timestamp: new Date(),
};

module.exports = {
    data: new SlashCommandBuilder()
    .setName("staffhelp")   
    .setDescription("Displays the list of commands available to staff members."),
    
    execute: async (client, interaction, channel) => {

        if (!interaction.member.permissions.has("MANAGE_MESSAGES")) return interaction.reply({ content: "You're missing the correct permissions! | **Permissions needed** : *MANAGE_MESSAGES*", ephemeral: false })
        await interaction.reply({ embeds: [embedStaffHelp]})

    },
    
};