import { Command } from 'commander';
import anytimeCommand from './anytime';
import pastCommand from './past';
import futureCommand from './future';
import recentCommand from './recent';
import soonCommand from './soon';
import monthCommand from './month';
import weekdayCommand from './weekday';
import birthdateCommand from './birthdate';

const command = new Command('date')
  .description(`Module to generate dates.`)
  .addCommand(anytimeCommand)
  .addCommand(pastCommand)
  .addCommand(futureCommand)
  .addCommand(recentCommand)
  .addCommand(soonCommand)
  .addCommand(monthCommand)
  .addCommand(weekdayCommand)
  .addCommand(birthdateCommand);

export default command;
