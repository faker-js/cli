import { Command } from 'commander';
import genreCommand from './genre';
import songNameCommand from './songName';

const command = new Command('music')
  .description(`Module to generate music related entries.`)
  .addCommand(genreCommand)
  .addCommand(songNameCommand);

export default command;
