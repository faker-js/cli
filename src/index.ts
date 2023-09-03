import { Command } from 'commander';
import { description, version } from '../package.json';

const program = new Command()
  .name('faker')
  .version(version)
  .description(description)
  .usage('faker [options] module_name entry_name');

const commands: Command[] = [];
for (const command of commands) {
  // implement sub commands
}

program.parse(process.argv);

const hasArgs = process.argv.length > 2;
if (!hasArgs) {
  program.help();
}
