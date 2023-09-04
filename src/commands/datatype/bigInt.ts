import { Command } from 'commander';
import { faker } from '@faker-js/faker';

const command = new Command('bigInt')
  .description(
    `Returns a [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type) number.`,
  )
  .action(() => {
    console.log(faker.datatype.bigInt());
  });

export default command;
