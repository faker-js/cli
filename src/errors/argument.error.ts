export class ArgumentError extends Error {
  constructor(argumentName: string, originalValue: unknown) {
    const stringValue = JSON.stringify(originalValue);
    super(
      `Invalid "${argumentName}" argument. A string value is required but found ${stringValue}.`,
    );
  }
}
