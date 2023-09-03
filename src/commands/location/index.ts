import { Command } from 'commander';
import zipCodeCommand from './zipCode';
import zipCodeByStateCommand from './zipCodeByState';
import cityCommand from './city';
import cityNameCommand from './cityName';
import buildingNumberCommand from './buildingNumber';
import streetCommand from './street';
import streetNameCommand from './streetName';
import streetAddressCommand from './streetAddress';
import secondaryAddressCommand from './secondaryAddress';
import countyCommand from './county';
import countryCommand from './country';
import countryCodeCommand from './countryCode';
import stateCommand from './state';
import stateAbbrCommand from './stateAbbr';
import latitudeCommand from './latitude';
import longitudeCommand from './longitude';
import directionCommand from './direction';
import cardinalDirectionCommand from './cardinalDirection';
import ordinalDirectionCommand from './ordinalDirection';
import nearbyGPSCoordinateCommand from './nearbyGPSCoordinate';
import timeZoneCommand from './timeZone';

const command = new Command('location')
  .description(
    `Module to generate addresses and locations. Prior to Faker 8.0.0, this module was known as \`faker.address\`.`,
  )
  .addCommand(zipCodeCommand)
  .addCommand(zipCodeByStateCommand)
  .addCommand(cityCommand)
  .addCommand(cityNameCommand)
  .addCommand(buildingNumberCommand)
  .addCommand(streetCommand)
  .addCommand(streetNameCommand)
  .addCommand(streetAddressCommand)
  .addCommand(secondaryAddressCommand)
  .addCommand(countyCommand)
  .addCommand(countryCommand)
  .addCommand(countryCodeCommand)
  .addCommand(stateCommand)
  .addCommand(stateAbbrCommand)
  .addCommand(latitudeCommand)
  .addCommand(longitudeCommand)
  .addCommand(directionCommand)
  .addCommand(cardinalDirectionCommand)
  .addCommand(ordinalDirectionCommand)
  .addCommand(nearbyGPSCoordinateCommand)
  .addCommand(timeZoneCommand);

export default command;
