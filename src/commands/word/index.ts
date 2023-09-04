import { Command } from 'commander';
import adjectiveCommand from './adjective';
import adverbCommand from './adverb';
import conjunctionCommand from './conjunction';
import interjectionCommand from './interjection';
import nounCommand from './noun';
import prepositionCommand from './preposition';
import verbCommand from './verb';
import sampleCommand from './sample';
import wordsCommand from './words';

const command = new Command('word')
  .description(`Module to return various types of words.`)
  .addCommand(adjectiveCommand)
  .addCommand(adverbCommand)
  .addCommand(conjunctionCommand)
  .addCommand(interjectionCommand)
  .addCommand(nounCommand)
  .addCommand(prepositionCommand)
  .addCommand(verbCommand)
  .addCommand(sampleCommand)
  .addCommand(wordsCommand);

export default command;
