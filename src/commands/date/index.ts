import { Command } from 'commander';
import monthCommand from './month';
import weekdayCommand from './weekday';

const command = new Command('date')
  .description(
    `Module to generate dates.
`,
  )
  .addCommand(monthCommand)
  .addCommand(weekdayCommand);

export default command;
