import { Command } from 'commander';
import fileNameCommand from './fileName';
import commonFileNameCommand from './commonFileName';
import mimeTypeCommand from './mimeType';
import commonFileTypeCommand from './commonFileType';
import commonFileExtCommand from './commonFileExt';
import fileTypeCommand from './fileType';
import fileExtCommand from './fileExt';
import directoryPathCommand from './directoryPath';
import filePathCommand from './filePath';
import semverCommand from './semver';
import networkInterfaceCommand from './networkInterface';
import cronCommand from './cron';

const command = new Command('system')
  .description(`Generates fake data for many computer systems properties.`)
  .addCommand(fileNameCommand)
  .addCommand(commonFileNameCommand)
  .addCommand(mimeTypeCommand)
  .addCommand(commonFileTypeCommand)
  .addCommand(commonFileExtCommand)
  .addCommand(fileTypeCommand)
  .addCommand(fileExtCommand)
  .addCommand(directoryPathCommand)
  .addCommand(filePathCommand)
  .addCommand(semverCommand)
  .addCommand(networkInterfaceCommand)
  .addCommand(cronCommand);

export default command;
