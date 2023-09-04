import { Command } from 'commander';
import avatarCommand from './avatar';
import emailCommand from './email';
import exampleEmailCommand from './exampleEmail';
import userNameCommand from './userName';
import displayNameCommand from './displayName';
import protocolCommand from './protocol';
import httpMethodCommand from './httpMethod';
import httpStatusCodeCommand from './httpStatusCode';
import urlCommand from './url';
import domainNameCommand from './domainName';
import domainSuffixCommand from './domainSuffix';
import domainWordCommand from './domainWord';
import ipCommand from './ip';
import ipv4Command from './ipv4';
import ipv6Command from './ipv6';
import portCommand from './port';
import userAgentCommand from './userAgent';
import colorCommand from './color';
import macCommand from './mac';
import passwordCommand from './password';
import emojiCommand from './emoji';

const command = new Command('internet')
  .description(`Module to generate internet related entries.`)
  .addCommand(avatarCommand)
  .addCommand(emailCommand)
  .addCommand(exampleEmailCommand)
  .addCommand(userNameCommand)
  .addCommand(displayNameCommand)
  .addCommand(protocolCommand)
  .addCommand(httpMethodCommand)
  .addCommand(httpStatusCodeCommand)
  .addCommand(urlCommand)
  .addCommand(domainNameCommand)
  .addCommand(domainSuffixCommand)
  .addCommand(domainWordCommand)
  .addCommand(ipCommand)
  .addCommand(ipv4Command)
  .addCommand(ipv6Command)
  .addCommand(portCommand)
  .addCommand(userAgentCommand)
  .addCommand(colorCommand)
  .addCommand(macCommand)
  .addCommand(passwordCommand)
  .addCommand(emojiCommand);

export default command;
