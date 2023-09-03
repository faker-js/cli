import { Command } from 'commander';

const command = new Command('number').description(
  `Module to generate numbers of any kind.`,
);

export default command;
