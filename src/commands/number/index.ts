import { Command } from 'commander';
import intCommand from './int';
import floatCommand from './float';
import binaryCommand from './binary';
import octalCommand from './octal';
import hexCommand from './hex';
import bigIntCommand from './bigInt';

const command = new Command('number')
  .description(`Module to generate numbers of any kind.`)
  .addCommand(intCommand)
  .addCommand(floatCommand)
  .addCommand(binaryCommand)
  .addCommand(octalCommand)
  .addCommand(hexCommand)
  .addCommand(bigIntCommand);

export default command;
