import { Command } from 'commander';
import numberCommand from './number';
import imeiCommand from './imei';

const command = new Command('phone')
  .description(`Module to generate phone-related data.`)
  .addCommand(numberCommand)
  .addCommand(imeiCommand);

export default command;
