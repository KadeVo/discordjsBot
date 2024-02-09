import { Client, Events, GatewayIntentBits } from 'discord.js'
import { config } from 'dotenv'
import * as test from './commands/testcommand.js'
import * as question from './commands/question.js'
import * as help from './commands/help.js'
import * as coinflip from './commands/coinflip.js'
import * as diceroll from './commands/diceroll.js'
config()
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
})

function readyDiscord() {
  console.log('Up, running and ready to serve ' + client.user.tag)
}

async function handleCommand(interaction) {
  try {
    if (!interaction.isCommand()) return

    switch (interaction.commandName) {
      case 'test':
        await test.execute(interaction)
        break
      case 'question':
        await question.execute(interaction)
        break
      case 'help':
        await help.execute(interaction)
        break
      case 'coinflip':
        await coinflip.execute(interaction)
        break
      case 'roll':
        await diceroll.execute(interaction)
        break
      default:
        await interaction.reply('Error')
        break
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
