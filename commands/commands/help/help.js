const Discord = require('discord.js');
const { prefix } = require('@root/config.json')
module.exports = {
    commands: 'help',
    callback: (message, arguments, text, client) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Il mio prefisso è "${prefix}" e questi sono i miei comandi supportati:`)
            .setThumbnail(client.user.avatarURL({ dynamic: true }))
            .addFields({
                name: '<:IconPin:840623741377708053> __Aiuto__',
                value: `**${prefix}help** - Visualizza il menu di aiuto\n**${prefix}ticket <Messaggio>** - Crea un ticket se hai bisogno di aiuto per qualsiasi cosa`,
                inline: false,
            }, {
                name: '<:IconRole:840623763879886908> __Informazione__',
                value: `**${prefix}botinfo** - Visualizza informazioni su ${client.user.username}\n**${prefix}serverinfo** - Visualizza le informazioni su questo server\n**${prefix}userinfo <@Membro>** - Visualizza le informazioni sul membro\n**${prefix}ping** - Pong! Visualizza le latenze di Bot e API`,
                inline: false,
            }, {
                name: '<:IconRole:840623763879886908> __Informazioni su ShadowAssassin__',
                value: `**${prefix}socials** - Visualizza un elenco di __ShadowAssassin____ social networks`,
                inline: false,
            }, {
                name: '<:IconStoreChannel:840623774684020737> __Miscellaneo__',
                value: `
                **${prefix}hi/hello** - Ciao! :grin\n**${prefix}poll** -  Crea un sondaggio sull'ultimo messaggio inviato\n**${prefix}rolldice** - Tira un dado!\n**${prefix}randomcolor/rc** - Genera un colore casuale!`,
                inline: false,
            }, {
                name: '<:fx:840635607264657428> __Matematica__',
                value: `**${prefix}add/sub<n1> <n2>**\n**${prefix}multiply/divide\n<n1> <n2>**`,
                inline: true,
            }, {
                name: '<a:ItemModBan:840626477635731457> __Moderazione__',
                value: `**${prefix}kick <@membro>**\n**${prefix}ban <@membro>**\n**${prefix}clear <quantità>**\n**${prefix}mute <@membro> <tempo muto>**\n**${prefix}unmute <@membro>**`,
                inline: true,
            },
                // {
                //     name:'',
                //     value:
                // `**${prefix}**`,
                //     inline:false,
                // },
            )
        message.channel.send(embed)
    },
}