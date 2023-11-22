import { SlashCommandBuilder } from 'discord.js'

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('test')
  .setDescription('This is a test description')

// Execute function export
export async function execute(interaction) {
  await interaction.reply('testing123')
}
