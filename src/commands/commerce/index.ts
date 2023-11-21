import { Command } from 'commander';
import departmentCommand from './department';
import productNameCommand from './productName';
import priceCommand from './price';
import productAdjectiveCommand from './productAdjective';
import productMaterialCommand from './productMaterial';
import productCommand from './product';
import productDescriptionCommand from './productDescription';
import isbnCommand from './isbn';

const command = new Command('commerce')
  .description(
    `Module to generate commerce and product related entries.
`,
  )
  .addCommand(departmentCommand)
  .addCommand(productNameCommand)
  .addCommand(priceCommand)
  .addCommand(productAdjectiveCommand)
  .addCommand(productMaterialCommand)
  .addCommand(productCommand)
  .addCommand(productDescriptionCommand)
  .addCommand(isbnCommand);

export default command;
