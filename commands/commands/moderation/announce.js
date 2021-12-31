const { Message, MessageEmbed } = require("discord.js");

const channelId = '869892189772210206' //Target Announce channel

module.exports = {
    commands: 'announce',
    expectedArgs: '<announcement>',
    permissionError: '',
    minArgs: 1,
    callback: (message, arguments, client) => {

        message.delete()
        const args = arguments.join(' ')

        const member = message.member
        const channel = member.guild.channels.cache.get(channelId);


        const embed = new MessageEmbed()
            .setAuthor('Nuovo annuncio!')
            .setFooter(`Annuncio creato da ${member.user.username}`)
            .setDescription(`${args}`)
        channel.send(`@everyone`, {
            embed: embed
        })


    },
    permissions: ['ADMINISTRATOR']
}