const Discord = require('discord.js');
const { prefix } = require('@root/config.json')
module.exports = {
    commands: 'socials',
    callback: (message, arguments, text, client) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Puoi trovare __ ShadowAssassinTTV __ su:`)
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .setColor('#3A747D')
            .setDescription(
                `
                **<:Twitch:840603449103351870> Twitch: [shadowassassinTTV](https://www.twitch.tv/shadowassassinttv)**\n**<:youtube:840603449615319046> Youtube: [ShadowAssassinTTV](https://www.youtube.com/channel/UCe0kifKMMaghI6qRrYMgEPQ)**`
            )

        message.channel.send(embed)
    },
}