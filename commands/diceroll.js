import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('diceroll')
  .setDescription('Roll a dice')
  .addStringOption((option) =>
    option
      .setName('sideddice')
      .setDescription('Enter max number on the dice')
      .setRequired(true)
  )

export async function execute(interaction) {}
