import { Command } from 'commander';

const command = new Command('mongodbObjectId')
  .description(
    `Returns a MongoDB [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/) string.`,
  )
  .action(async () => {
    const { faker } = await import('@faker-js/faker/locale/en');
    console.log(faker.database.mongodbObjectId());
  });

export default command;
