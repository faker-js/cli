import { Command } from 'commander';
import wordCommand from './word';
import wordsCommand from './words';
import sentenceCommand from './sentence';
import slugCommand from './slug';
import sentencesCommand from './sentences';
import paragraphCommand from './paragraph';
import paragraphsCommand from './paragraphs';
import textCommand from './text';
import linesCommand from './lines';

const command = new Command('lorem')
  .description(`Module to generate random texts and words.`)
  .addCommand(wordCommand)
  .addCommand(wordsCommand)
  .addCommand(sentenceCommand)
  .addCommand(slugCommand)
  .addCommand(sentencesCommand)
  .addCommand(paragraphCommand)
  .addCommand(paragraphsCommand)
  .addCommand(textCommand)
  .addCommand(linesCommand);

export default command;
