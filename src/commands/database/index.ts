import { Command } from 'commander';
import columnCommand from './column';
import typeCommand from './type';
import collationCommand from './collation';
import engineCommand from './engine';
import mongodbObjectIdCommand from './mongodbObjectId';

const command = new Command('database')
  .description(`Module to generate database related entries.`)
  .addCommand(columnCommand)
  .addCommand(typeCommand)
  .addCommand(collationCommand)
  .addCommand(engineCommand)
  .addCommand(mongodbObjectIdCommand);

export default command;
