import { Command } from 'commander';
import humanCommand from './human';
import spaceCommand from './space';
import cssSupportedFunctionCommand from './cssSupportedFunction';
import cssSupportedSpaceCommand from './cssSupportedSpace';
import rgbCommand from './rgb';
import cmykCommand from './cmyk';
import hslCommand from './hsl';
import hwbCommand from './hwb';
import labCommand from './lab';
import lchCommand from './lch';
import colorByCSSColorSpaceCommand from './colorByCSSColorSpace';

const command = new Command('color')
  .description(`Module to generate colors.`)
  .addCommand(humanCommand)
  .addCommand(spaceCommand)
  .addCommand(cssSupportedFunctionCommand)
  .addCommand(cssSupportedSpaceCommand)
  .addCommand(rgbCommand)
  .addCommand(cmykCommand)
  .addCommand(hslCommand)
  .addCommand(hwbCommand)
  .addCommand(labCommand)
  .addCommand(lchCommand)
  .addCommand(colorByCSSColorSpaceCommand);

export default command;
