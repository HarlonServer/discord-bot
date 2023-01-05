const chalk = require("chalk");

module.exports = {
  name: "err",
  execute() {
    console.log(
      chalk.red(`[Database Status] An error occured with the database connection:\n${err}`)
    );
  },
};
