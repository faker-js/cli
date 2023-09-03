import { Command } from 'commander';
import abbreviationCommand from './abbreviation';
import adjectiveCommand from './adjective';
import nounCommand from './noun';
import verbCommand from './verb';
import ingverbCommand from './ingverb';
import phraseCommand from './phrase';

const command = new Command('hacker')
  .description(`Module to generate hacker/IT words and phrases.`)
  .addCommand(abbreviationCommand)
  .addCommand(adjectiveCommand)
  .addCommand(nounCommand)
  .addCommand(verbCommand)
  .addCommand(ingverbCommand)
  .addCommand(phraseCommand);

export default command;
