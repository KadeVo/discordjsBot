import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Print our commands')

export async function execute(interaction) {
  await interaction.reply(
    `We only have 1 command right now, and that's coinflip!`
  )
}
