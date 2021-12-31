module.exports = (client) => {
  const channelId = "869887346122833951"; //Membri:
  const guild = "378568766188945411"; //Guild ID

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId);
    channel.setName(`Membri: ${guild.memberCount.toLocaleString()}`);
  };

  client.on("guildMemberAdd", (member) => {
    if (member.guild.id === guild) {
      updateMembers(member.guild);
    } else {
      return;
    }
  });
  client.on("guildMemberRemove", (member) => {
    if (member.guild.id === guild) {
      updateMembers(member.guild);
    } else {
      return;
    }
  });
};
