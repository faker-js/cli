import { Command } from 'commander';

const command = new Command('zodiacSign')
  .description(`Returns a random zodiac sign.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.person.zodiacSign());
  });

export default command;
