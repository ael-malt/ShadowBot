const { Message } = require("discord.js");
const ms = require('ms')

module.exports = {
    commands: 'mute',
    expectedArgs: '<[@membro]> <tempo muto (s,m,h,d,w,y)>',
    permissionError: '',
    minArgs: 1,
    maxArgs: 3,
    callback: (message, arguments, text, client) => {
        const target = message.mentions.users.first();
        if (target) {
 
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!arguments[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`${memberTarget} è stato disattivato`);
                return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${memberTarget} è stato disattivato per ${ms(ms(arguments[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(arguments[1]));
        } else {
            message.channel.send('Si prega di specificare un membro valido!');
        }
    },
    permissions: ['ADMINISTRATOR'],
}