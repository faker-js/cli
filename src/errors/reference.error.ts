export class ReferenceError extends Error {
  constructor(accessor: 'module' | 'function', key: string) {
    super(`There is no ${accessor} with the key "${key}".`);
  }
}
