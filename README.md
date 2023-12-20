# Faker-CLI

A CLI of [@faker-js/faker](https://github.com/faker-js/faker).

> **:information_source: Note**: This is currently a [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product).

## Install

```bash
npm install --save-dev @faker-js/cli
```

## Usage

```
npx faker <moduleName> <functionName>
```

> **:information_source: Note**: [Read more about `npx`](https://docs.npmjs.com/cli/v7/commands/npx)

Faker-CLI expects a `moduleName` as well as a `functionName` argument.
This is equivalent to calling `faker[moduleName][functionName]`.
Checkout [Fakers's API](https://fakerjs.dev/api/) for information on which modules and functions are available.

## Examples

If you want a integer you can run:

```bash
npx faker number int
```

## What's Next?

Upcoming features might include:

### :hammer_and_wrench: Localization

Users will be able to specify a locale for localized data.
Currently, the CLI always uses the default `en` locale.
In the future, this feature could be implemented as follows:

```bash
npx faker --locale de person firstName
```

This example would print a first name from the German locale.

### :hammer_and_wrench: Support for All Parameters of `@faker-js/faker` Natively

This CLI is currently in its MVP stage, which means that it only performs the bare minimum.
If you need an integer within a specific range, you'll have to do it yourself.
In the future, this feature could be implemented as follows:

```bash
npx faker number int --min 10 --max 20
```

This example will generate an integer between 10 and 20.
The `min` and `max` options are available in [Faker's int options](https://fakerjs.dev/api/number.html#int).

### :hammer_and_wrench: Better Documentation in the Terminal

Developers often dislike changing work environments.
If you're already working in the terminal, you probably don't want to leave it to look up a small detail.
Instead, you expect the CLI to have a proper `--help` documentation that includes examples.
This will be the case in the future.
