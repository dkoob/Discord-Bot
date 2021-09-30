require('dotenv').config();
const discord = require('discord.js')
const { Client, MessageEmbed, Intents } = require('discord.js')
const client = new discord.Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS ] });
const { SlashCommandBuilder } = require('@discordjs/builders');
var guild = client.guilds.cache.get(process.env.GUILDID)

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Allows the admin or owner to ban the member.")
    .addUserOption((option) => option.setName('user').setDescription('The person who you want to ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Reason to ban member').setRequired(true)),
    
    execute: async (client, interaction, channel) => {

        //    .addUserOption(option => option.setName('user').setDescription('The user').setRequired(true)),
        const user = interaction.options.getUser('user')
        const member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})

        if(!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: "You're missing the correct permissions :(", ephemeral: false })
        
        if(!member) return interaction.deferReply("I am unsure of who to ban!");
        const reason = interaction.options.getString('reason')

        if(!member.bannable || member.user.id === client.user.id) 
        return interaction.reply("I am unable to ban this member");
        
        if(interaction.member.roles.highest.position <= member.roles.highest.position) 
        return interaction.reply('Given member has a higher or equal rank as you so I can not ban them.')
        
        
        const embed = new MessageEmbed()
        .setDescription(`**${member.user.tag}** is banned out from the server for \`${reason}\``)
        .setColor("RANDOM")
        .setFooter("Banned Member")
        .setTimestamp()
        
        
        await member.user.send(`You have been banned from **\`${interaction.guild.name}\`** for \`${reason}\``).catch(err => {})
        member.ban({ reason })

        return interaction.reply({ embeds: [embed]})

    },
    
};