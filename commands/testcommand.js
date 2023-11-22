import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('test')
  .setDescription('This is a test description')

export async function execute(interaction) {
  await interaction.reply('testing123')
}
