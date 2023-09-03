import { Command } from 'commander';

const command = new Command('database').description(
  `Module to generate database related entries.`,
);

export default command;
