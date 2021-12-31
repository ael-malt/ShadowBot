const { Message } = require("discord.js");

module.exports = {
    commands: 'unmute',
    expectedArgs: '<[@membro]>',
    permissionError: '',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text, client) => {
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
            let memberTarget = message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`${memberTarget} è stato riattivato!`)
        }else {
            message.channel.send('Si prega di specificare un membro valido!')
        }
    },
    permissions: ['ADMINISTRATOR'],
}