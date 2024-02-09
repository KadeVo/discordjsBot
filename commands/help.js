import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Print our commands')

export async function execute(interaction) {
  await interaction.reply(
    `/diceroll (enter your max number), /coinflip, /question (enter your question) (enter your options)`
  )
}
