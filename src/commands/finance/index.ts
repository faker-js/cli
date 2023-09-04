import { Command } from 'commander';
import accountCommand from './account';
import accountNumberCommand from './accountNumber';
import accountNameCommand from './accountName';
import routingNumberCommand from './routingNumber';
import maskCommand from './mask';
import maskedNumberCommand from './maskedNumber';
import amountCommand from './amount';
import transactionTypeCommand from './transactionType';
import currencyCommand from './currency';
import currencyCodeCommand from './currencyCode';
import currencyNameCommand from './currencyName';
import currencySymbolCommand from './currencySymbol';
import bitcoinAddressCommand from './bitcoinAddress';
import litecoinAddressCommand from './litecoinAddress';
import creditCardNumberCommand from './creditCardNumber';
import creditCardCVVCommand from './creditCardCVV';
import creditCardIssuerCommand from './creditCardIssuer';
import pinCommand from './pin';
import ethereumAddressCommand from './ethereumAddress';
import ibanCommand from './iban';
import bicCommand from './bic';
import transactionDescriptionCommand from './transactionDescription';

const command = new Command('finance')
  .description(`Module to generate finance and money related entries.`)
  .addCommand(accountCommand)
  .addCommand(accountNumberCommand)
  .addCommand(accountNameCommand)
  .addCommand(routingNumberCommand)
  .addCommand(maskCommand)
  .addCommand(maskedNumberCommand)
  .addCommand(amountCommand)
  .addCommand(transactionTypeCommand)
  .addCommand(currencyCommand)
  .addCommand(currencyCodeCommand)
  .addCommand(currencyNameCommand)
  .addCommand(currencySymbolCommand)
  .addCommand(bitcoinAddressCommand)
  .addCommand(litecoinAddressCommand)
  .addCommand(creditCardNumberCommand)
  .addCommand(creditCardCVVCommand)
  .addCommand(creditCardIssuerCommand)
  .addCommand(pinCommand)
  .addCommand(ethereumAddressCommand)
  .addCommand(ibanCommand)
  .addCommand(bicCommand)
  .addCommand(transactionDescriptionCommand);

export default command;
