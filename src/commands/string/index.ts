import { Command } from 'commander';
import alphaCommand from './alpha';
import alphanumericCommand from './alphanumeric';
import binaryCommand from './binary';
import octalCommand from './octal';
import hexadecimalCommand from './hexadecimal';
import numericCommand from './numeric';
import sampleCommand from './sample';
import uuidCommand from './uuid';
import nanoidCommand from './nanoid';
import symbolCommand from './symbol';

const command = new Command('string')
  .description(`Module to generate string related entries.`)
  .addCommand(alphaCommand)
  .addCommand(alphanumericCommand)
  .addCommand(binaryCommand)
  .addCommand(octalCommand)
  .addCommand(hexadecimalCommand)
  .addCommand(numericCommand)
  .addCommand(sampleCommand)
  .addCommand(uuidCommand)
  .addCommand(nanoidCommand)
  .addCommand(symbolCommand);

export default command;
