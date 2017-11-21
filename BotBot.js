// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzEwOTUyNzE0MDY4NTU3ODM0.DPUalQ.7qAm-YYzFbdNiyv4OSMlvulm40A';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setPresence({ game: { name: 'SMITE', type: 0 } });
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
      message.reply(message.author.avatarURL);
      
  } else if (message.content === 'help') {
      message.reply("what's poppin' niggy it's botbot");
      
  } else if (message.content === 'commands') {
      message.reply("what is my avatar, join, help.");
      
  } else if (message.content === 'join') {
      // Join a voice channel
    const channel = message.member.voiceChannel;
      channel.join()
        .then(connection => console.log('Connected!'));
  }
});

// Log our bot in
client.login(token);