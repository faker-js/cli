import { Command } from 'commander';

const command = new Command('flightNumber')
  .description(
    `Returns a random flight number. Flight numbers are always 1 to 4 digits long. Sometimes they are
`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.airline.flightNumber());
  });

export default command;
