import { Command } from 'commander';
import branchCommand from './branch';
import commitEntryCommand from './commitEntry';
import commitMessageCommand from './commitMessage';
import commitDateCommand from './commitDate';
import commitShaCommand from './commitSha';
import shortShaCommand from './shortSha';

const command = new Command('git')
  .description(`Module to generate git related entries.`)
  .addCommand(branchCommand)
  .addCommand(commitEntryCommand)
  .addCommand(commitMessageCommand)
  .addCommand(commitDateCommand)
  .addCommand(commitShaCommand)
  .addCommand(shortShaCommand);

export default command;
