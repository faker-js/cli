import { Command } from 'commander';
import firstNameCommand from './firstName';
import lastNameCommand from './lastName';
import middleNameCommand from './middleName';
import fullNameCommand from './fullName';
import genderCommand from './gender';
import sexCommand from './sex';
import sexTypeCommand from './sexType';
import bioCommand from './bio';
import prefixCommand from './prefix';
import suffixCommand from './suffix';
import jobTitleCommand from './jobTitle';
import jobDescriptorCommand from './jobDescriptor';
import jobAreaCommand from './jobArea';
import jobTypeCommand from './jobType';
import zodiacSignCommand from './zodiacSign';

const command = new Command('person')
  .description(
    `Module to generate people's personal information such as names and job titles. Prior to Faker 8.0.0, this module was known as \`faker.name\`.`,
  )
  .addCommand(firstNameCommand)
  .addCommand(lastNameCommand)
  .addCommand(middleNameCommand)
  .addCommand(fullNameCommand)
  .addCommand(genderCommand)
  .addCommand(sexCommand)
  .addCommand(sexTypeCommand)
  .addCommand(bioCommand)
  .addCommand(prefixCommand)
  .addCommand(suffixCommand)
  .addCommand(jobTitleCommand)
  .addCommand(jobDescriptorCommand)
  .addCommand(jobAreaCommand)
  .addCommand(jobTypeCommand)
  .addCommand(zodiacSignCommand);

export default command;
