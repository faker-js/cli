import { Command } from 'commander';
import avatarCommand from './avatar';
import avatarGitHubCommand from './avatarGitHub';
import avatarLegacyCommand from './avatarLegacy';
import urlCommand from './url';
import urlLoremFlickrCommand from './urlLoremFlickr';
import urlPicsumPhotosCommand from './urlPicsumPhotos';
import urlPlaceholderCommand from './urlPlaceholder';
import dataUriCommand from './dataUri';
import imageCommand from './image';
import imageUrlCommand from './imageUrl';
import abstractCommand from './abstract';
import animalsCommand from './animals';
import businessCommand from './business';
import catsCommand from './cats';
import cityCommand from './city';
import foodCommand from './food';
import nightlifeCommand from './nightlife';
import fashionCommand from './fashion';
import peopleCommand from './people';
import natureCommand from './nature';
import sportsCommand from './sports';
import technicsCommand from './technics';
import transportCommand from './transport';

const command = new Command('image')
  .description(`Module to generate images.`)
  .addCommand(avatarCommand)
  .addCommand(avatarGitHubCommand)
  .addCommand(avatarLegacyCommand)
  .addCommand(urlCommand)
  .addCommand(urlLoremFlickrCommand)
  .addCommand(urlPicsumPhotosCommand)
  .addCommand(urlPlaceholderCommand)
  .addCommand(dataUriCommand)
  .addCommand(imageCommand)
  .addCommand(imageUrlCommand)
  .addCommand(abstractCommand)
  .addCommand(animalsCommand)
  .addCommand(businessCommand)
  .addCommand(catsCommand)
  .addCommand(cityCommand)
  .addCommand(foodCommand)
  .addCommand(nightlifeCommand)
  .addCommand(fashionCommand)
  .addCommand(peopleCommand)
  .addCommand(natureCommand)
  .addCommand(sportsCommand)
  .addCommand(technicsCommand)
  .addCommand(transportCommand);

export default command;
