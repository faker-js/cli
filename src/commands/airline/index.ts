import { Command } from 'commander';

const command = new Command('airline').description(
  `Module to generate airline and airport related data.`,
);

export default command;
