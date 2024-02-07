import { Client, Events, GatewayIntentBits } from 'discord.js'
import { config } from 'dotenv'
import * as test from './commands/testcommand.js'
import * as question from './commands/question.js'
config()
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
})

function readyDiscord() {
  console.log('Up and running ' + client.user.tag)
}

async function handleCommand(interaction) {
  try {
    if (!interaction.isCommand()) return
    if (interaction.commandName === 'test') {
      await test.execute(interaction)
    } else if (interaction.commandName === 'question') {
      await question.execute(interaction)
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
