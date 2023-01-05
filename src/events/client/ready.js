const chalk = require("chalk");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    setInterval(client.pickPresence, 100000);
    console.log(
      chalk.bgGreenBright(`${client.user.tag} has logged into Discord.`)
    );
  },
};