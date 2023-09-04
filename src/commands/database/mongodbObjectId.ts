import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('mongodbObjectId')
  .description(`Generates a MongoDB ObjectId string.`)
  .action(() => {
    console.log(faker.database.mongodbObjectId());
  });

export default command;
