const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
    name: "loop",
    description: "تكرار الاغنية",
    usage: "",
    permissions: {
      channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
      member: [],
    },
    aliases: ["l", "repeat"],
    /**
      *
      * @param {import("../structures/DiscordMusicBot")} client
      * @param {import("discord.js").Message} message
      * @param {string[]} args
      * @param {*} param3
      */
    run: async (client, message, args, { GuildDB }) => {
      let player = await client.Manager.get(message.guild.id);
      if (!player) return client.sendTime(message.channel, "❌ | **لا شيء يشتغل الآن...**");
      if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **You must be in a voice channel to use this command!**");
      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return client.sendTime(message.channel, ":x: | **You must be in the same voice channel as me to use this command!**");

        if (player.trackRepeat) {
          player.setTrackRepeat(false)
          client.sendTime(message.channel, `🔂  \`التكرار معطل\``);
        } else {
          player.setTrackRepeat(true)
          client.sendTime(message.channel, `🔂 \`التكرار مفعل\``);
        }
    },
    SlashCommand: {
       /**
       *
       * @param {import("../structures/DiscordMusicBot")} client
       * @param {import("discord.js").Message} message
       * @param {string[]} args
       * @param {*} param3
       */
        run: async (client, interaction, args, { GuildDB }) => {
          const guild = client.guilds.cache.get(interaction.guild_id);
          const member = guild.members.cache.get(interaction.member.user.id);
          const voiceChannel = member.voice.channel;
          let player = await client.Manager.get(interaction.guild_id);
          if (!player) return client.sendTime(interaction, "❌ | **لا شيء يشتغل الآن...**"); 
          if (!member.voice.channel) return client.sendTime(interaction, "❌ | You must be in a voice channel to use this command.");
          if (guild.me.voice.channel && !guild.me.voice.channel.equals(member.voice.channel)) return client.sendTime(interaction, ":x: | **You must be in the same voice channel as me to use this command!**");

            if(player.trackRepeat){
                  player.setTrackRepeat(false)
                  client.sendTime(interaction, `🔂 \`التكرار معطل\``);
              }else{
                  player.setTrackRepeat(true)
                  client.sendTime(interaction, `🔂 \`التكرار مفعل\``);
              }
          console.log(interaction.data)
        }
      }    
};