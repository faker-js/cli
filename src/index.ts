import { buildProgram } from './build-program.js';

export function cli(args: string[]) {
  try {
    const program = buildProgram();

    const hasArgs = args.length > 2;
    if (!hasArgs) {
      program.help();
    } else {
      program.parse(args);
    }

    process.exit(0);
  } catch (error) {
    process.stderr.write(String(error));
    process.exit(1);
  }
}
