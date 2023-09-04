import { Command } from 'commander';
import suffixesCommand from './suffixes';
import nameCommand from './name';
import companySuffixCommand from './companySuffix';
import catchPhraseCommand from './catchPhrase';
import bsCommand from './bs';
import buzzPhraseCommand from './buzzPhrase';
import catchPhraseAdjectiveCommand from './catchPhraseAdjective';
import catchPhraseDescriptorCommand from './catchPhraseDescriptor';
import catchPhraseNounCommand from './catchPhraseNoun';
import bsAdjectiveCommand from './bsAdjective';
import buzzAdjectiveCommand from './buzzAdjective';
import bsBuzzCommand from './bsBuzz';
import buzzVerbCommand from './buzzVerb';
import bsNounCommand from './bsNoun';
import buzzNounCommand from './buzzNoun';

const command = new Command('company')
  .description(`Module to generate company related entries.`)
  .addCommand(suffixesCommand)
  .addCommand(nameCommand)
  .addCommand(companySuffixCommand)
  .addCommand(catchPhraseCommand)
  .addCommand(bsCommand)
  .addCommand(buzzPhraseCommand)
  .addCommand(catchPhraseAdjectiveCommand)
  .addCommand(catchPhraseDescriptorCommand)
  .addCommand(catchPhraseNounCommand)
  .addCommand(bsAdjectiveCommand)
  .addCommand(buzzAdjectiveCommand)
  .addCommand(bsBuzzCommand)
  .addCommand(buzzVerbCommand)
  .addCommand(bsNounCommand)
  .addCommand(buzzNounCommand);

export default command;
