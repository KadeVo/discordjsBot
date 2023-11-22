import { Client, Events, GatewayIntentBits } from 'discord.js'
import { config } from 'dotenv'

config()
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

function readyDiscord() {
  console.log('test' + client.user.tag)
}

client.once(Events.ClientReady, readyDiscord)

client.login(process.env.DISCORD_TOKEN)
