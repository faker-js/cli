import { Command } from 'commander';

const command = new Command('music').description(
  `Module to generate music related entries.`,
);

export default command;
