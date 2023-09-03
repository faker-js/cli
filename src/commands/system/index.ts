import { Command } from 'commander';

const command = new Command('system').description(
  `Generates fake data for many computer systems properties.`,
);

export default command;
