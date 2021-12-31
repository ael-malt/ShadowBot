const { Message, MessageEmbed } = require("discord.js");
const { version } = require('@root/package.json')
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'botinfo',
    callback: async (message, arguments, text, client) => {
        let totalMembers = 0

        for (const guild of client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size
        }
        const embed = new MessageEmbed()
            .setTitle(`Informazioni su ${client.user.username}`)
            .setThumbnail(client.user.avatarURL({
                dynamic: true
            }))
            .addFields({
                name: 'Bot tag',
                value: client.user.tag,
            }, {
                name: 'Versione',
                value: version,
            }, {
                name: "Prefisso del comando del server",
                value: prefix
            }, {
                name: "Tempo dall'inizio",
                value: `${process.uptime().toFixed(2)}s`
            }, {
                name: 'Numero di server',
                value: client.guilds.cache.size
            }, {
                name: 'Membri totali',
                value: totalMembers,
            })


        message.channel.send(embed)
    },

}