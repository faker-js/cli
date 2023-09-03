import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('mongodbObjectId')
  .description(
    `Returns a MongoDB [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/) string.`,
  )
  .action(() => {
    console.log(faker['database']['mongodbObjectId']());
  });

export default command;
