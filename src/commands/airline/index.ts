import { Command } from 'commander';
import airportCommand from './airport';
import airlineCommand from './airline';
import airplaneCommand from './airplane';
import recordLocatorCommand from './recordLocator';
import seatCommand from './seat';
import aircraftTypeCommand from './aircraftType';
import flightNumberCommand from './flightNumber';

const command = new Command('airline')
  .description(`Module to generate airline and airport related data.`)
  .addCommand(airportCommand)
  .addCommand(airlineCommand)
  .addCommand(airplaneCommand)
  .addCommand(recordLocatorCommand)
  .addCommand(seatCommand)
  .addCommand(aircraftTypeCommand)
  .addCommand(flightNumberCommand);

export default command;
