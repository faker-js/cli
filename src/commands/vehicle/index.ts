import { Command } from 'commander';
import vehicleCommand from './vehicle';
import manufacturerCommand from './manufacturer';
import modelCommand from './model';
import typeCommand from './type';
import fuelCommand from './fuel';
import vinCommand from './vin';
import colorCommand from './color';
import vrmCommand from './vrm';
import bicycleCommand from './bicycle';

const command = new Command('vehicle')
  .description(`Module to generate vehicle related entries.`)
  .addCommand(vehicleCommand)
  .addCommand(manufacturerCommand)
  .addCommand(modelCommand)
  .addCommand(typeCommand)
  .addCommand(fuelCommand)
  .addCommand(vinCommand)
  .addCommand(colorCommand)
  .addCommand(vrmCommand)
  .addCommand(bicycleCommand);

export default command;
