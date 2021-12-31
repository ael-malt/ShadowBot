const Discord = require('discord.js');
module.exports = {
    commands: 'serverinfo',
    callback: (message, arguments, text) => {
        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout } = guild

        const embed = new Discord.MessageEmbed()
            .setTitle(`Informazioni sul server per "${name}"`)
            .setThumbnail(guild.iconURL())
            .addFields({
                name: 'Regione',
                value: region,
            }, {
                name: 'Membri',
                value: memberCount,
            }, {
                name: 'Proprietario',
                value: owner.user.tag,
            }, {
                name: 'AFK Timeout',
                value: afkTimeout / 60,
            })
        message.channel.send(embed)

    }
}