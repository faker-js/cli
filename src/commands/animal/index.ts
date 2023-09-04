import { Command } from 'commander';
import dogCommand from './dog';
import catCommand from './cat';
import snakeCommand from './snake';
import bearCommand from './bear';
import lionCommand from './lion';
import cetaceanCommand from './cetacean';
import horseCommand from './horse';
import birdCommand from './bird';
import cowCommand from './cow';
import fishCommand from './fish';
import crocodiliaCommand from './crocodilia';
import insectCommand from './insect';
import rabbitCommand from './rabbit';
import rodentCommand from './rodent';
import typeCommand from './type';

const command = new Command('animal')
  .description(`Module to generate animal related entries.`)
  .addCommand(dogCommand)
  .addCommand(catCommand)
  .addCommand(snakeCommand)
  .addCommand(bearCommand)
  .addCommand(lionCommand)
  .addCommand(cetaceanCommand)
  .addCommand(horseCommand)
  .addCommand(birdCommand)
  .addCommand(cowCommand)
  .addCommand(fishCommand)
  .addCommand(crocodiliaCommand)
  .addCommand(insectCommand)
  .addCommand(rabbitCommand)
  .addCommand(rodentCommand)
  .addCommand(typeCommand);

export default command;
