import { Command } from 'commander';
import { description, version } from '../package.json';
import commands from './commands';

const program = new Command()
  .name('faker')
  .version(version)
  .description(description)
  .usage('faker [options] module_name entry_name');

for (const command of commands) {
  program.addCommand(command);
}

program.parse(process.argv);

const hasArgs = process.argv.length > 2;
if (!hasArgs) {
  program.help();
}
