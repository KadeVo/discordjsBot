import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('coinflip')
  .setDescription('Need to make a decision? Flip a coin.')

export async function execute(interaction) {
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails'
  await interaction.reply(`It's ${result}!`)
}
