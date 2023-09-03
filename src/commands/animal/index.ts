import { Command } from 'commander';

const command = new Command('animal').description(
  `Module to generate animal related entries.`,
);

export default command;
