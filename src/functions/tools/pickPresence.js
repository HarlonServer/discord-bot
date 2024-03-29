const { ActivityType } = require('discord.js');

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Playing,
        text: "play.harlonserver.net",
        status: "dnd",
      },
      {
        type: ActivityType.Listening,
        text: "/help",
        status: "dnd",
      },
    ];

    const option = Math.floor(Math.random() * options.length);

    client.user
      .setPresence({
        activities: [
          {
            name: options[option].text,
            type: options[option].type,
          },
        ],
        status: options[option].status,
      });
  };
};
