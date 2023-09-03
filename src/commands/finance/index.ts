import { Command } from 'commander';

const command = new Command('finance').description(
  `Module to generate finance and money related entries.`,
);

export default command;
