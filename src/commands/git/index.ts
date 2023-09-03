import { Command } from 'commander';

const command = new Command('git').description(
  `Module to generate git related entries.`,
);

export default command;
