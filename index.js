import { Client, Events, GatewayIntentBits } from 'discord.js'
import { config } from 'dotenv'
import * as test from './commands/testcommand.js'
config()
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
})

function readyDiscord() {
  console.log('test' + client.user.tag)
}

async function handleCommand(interaction) {
  try {
    if (!interaction.isCommand()) return
    if (interaction.commandName === 'test') {
      await test.execute(interaction)
    }
  } catch (error) {
    console.error(error)
    await interaction.reply('An error occurred while processing the command.')
  }
}

client.once(Events.ClientReady, readyDiscord)

client.login(process.env.DISCORD_TOKEN)

client.on(Events.InteractionCreate, handleCommand)

client.on(Events.Debug, console.log)
