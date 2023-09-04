import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('zodiacSign')
  .description(`Returns a random zodiac sign.`)
  .action(() => {
    console.log(faker.person.zodiacSign());
  });

export default command;
