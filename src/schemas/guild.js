const { Schema, model } = require("mongoose");
const guildSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guildId: String,
  guildName: String,
  guidIcon: { type: String, required: true },
});

module.exports = model("Guild", guildSchema, "guilds");
