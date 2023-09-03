import { Command } from 'commander';
import numberCommand from './number';
import floatCommand from './float';
import datetimeCommand from './datetime';
import stringCommand from './string';
import uuidCommand from './uuid';
import booleanCommand from './boolean';
import hexadecimalCommand from './hexadecimal';
import jsonCommand from './json';
import arrayCommand from './array';
import bigIntCommand from './bigInt';

const command = new Command('datatype')
  .description(`Module to generate various primitive values and data types.`)
  .addCommand(numberCommand)
  .addCommand(floatCommand)
  .addCommand(datetimeCommand)
  .addCommand(stringCommand)
  .addCommand(uuidCommand)
  .addCommand(booleanCommand)
  .addCommand(hexadecimalCommand)
  .addCommand(jsonCommand)
  .addCommand(arrayCommand)
  .addCommand(bigIntCommand);

export default command;
