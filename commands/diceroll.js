import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('diceroll')
  .setDescription('Roll a dice')
  .addIntegerOption((option) =>
    option
      .setName('sideddice')
      .setDescription('Enter max number on the dice')
      .setRequired(true)
  )

export async function execute(interaction) {
  const sideddice = interaction.options.getInteger('sideddice')

  const result = Math.floor(Math.random() * sideddice + 1)
  await interaction.reply(`It's ${result}!`)
}
