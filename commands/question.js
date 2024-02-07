import { SlashCommandBuilder } from 'discord.js'

export const data = new SlashCommandBuilder()
  .setName('question')
  .setDescription('Set up a question to ask everyone')
  .addStringOption((option) =>
    option
      .setName('question')
      .setDescription('Enter the question')
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName('options')
      .setDescription('Enter the options separated by commas')
      .setRequired(true)
  )

export async function execute(interaction) {
  //Need an input for the user to ask the question
  // Enter question
  // Enter Option amount
  // Enter Option value
  // If null return Null
  // Enter correct Answer
}
