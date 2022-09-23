import { Client } from "discord.js";
import dotenv from "dotenv";


dotenv.config();

const client = new Client({
  intents: ["Guilds", "GuildMembers", "GuildMessages"],
});

client.once("ready", async () => {
  // eslint-disable-next-line no-console
  console.log("login");
});

client.login(process.env.DISCORD_BOT_TOKEN);
