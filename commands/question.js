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
  const question = interaction.options.getString('question')
  const options = interaction.options.getString('options').split(',')

  // Send a message with the question and options
  await interaction.reply(
    `You've set up the following question:\nQuestion: ${question}\nOptions: ${options.join(
      ', '
    )}`
  )
}
