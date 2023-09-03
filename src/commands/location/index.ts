import { Command } from 'commander';

const command = new Command('location').description(
  `Module to generate addresses and locations. Prior to Faker 8.0.0, this module was known as \`faker.address\`.`,
);

export default command;
