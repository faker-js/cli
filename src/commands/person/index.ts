import { Command } from 'commander';

const command = new Command('person').description(
  `Module to generate people's personal information such as names and job titles. Prior to Faker 8.0.0, this module was known as \`faker.name\`.`,
);

export default command;
