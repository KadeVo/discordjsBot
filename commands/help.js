import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Print our commands')

export async function execute(interaction) {
  const help = {
    color: '#0099ff',
    title: 'Command List',
    description: 'Here is a list of available commands:',
    fields: [
      {
        name: '/diceroll [max number]',
        value: 'Roll a dice with the specified maximum number',
      },
      {
        name: '/coinflip',
        value: 'Flip a coin to get heads or tails',
      },
      {
        name: '/question [question] [options]',
        value: 'Set up a question to ask everyone',
      },
    ],
    footer: {
      text: 'For more information or assistance, contact the bot owner.',
    },
  }

  await interaction.reply({ embeds: [help] })
}
