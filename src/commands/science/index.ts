import { Command } from 'commander';
import chemicalElementCommand from './chemicalElement';
import unitCommand from './unit';

const command = new Command('science')
  .description(`Module to generate science related entries.`)
  .addCommand(chemicalElementCommand)
  .addCommand(unitCommand);

export default command;
