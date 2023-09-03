import { Command } from 'commander';

const command = new Command('company').description(
  `Module to generate company related entries.`,
);

export default command;
