import { Command } from 'commander';

const command = new Command('lorem').description(
  `Module to generate random texts and words.`,
);

export default command;
