import { Command } from 'commander';

const command = new Command('chemicalElement')
  .description(`Returns a random periodic table element.`)
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.science.chemicalElement());
  });

export default command;
