export class FunctionReferenceError extends Error {
  constructor(functionName: string, moduleName: string | undefined) {
    super(
      `The function ${functionName} does not exist${moduleName ? ' within the module ' + moduleName : ''}. Try to omit the module option or choose a different module.`,
    );
    this.name = FunctionReferenceError.name;
  }
}
