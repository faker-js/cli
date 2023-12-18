# Faker-CLI

A CLI of [@faker-js/faker](https://github.com/faker-js/faker).

> **Note**: This is currently a [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product).

## Install

```bash
npm install --save-dev @faker-js/cli
```

## Usage

```
npx faker <functionName>
```

> [ℹ: Read more about `npx`](https://docs.npmjs.com/cli/v7/commands/npx)

Faker-CLI expects a `functionName`.
This is equivalent to the names in Faker's modules.
Checkout [their API](https://fakerjs.dev/api/) for information on which functions are available.

## Examples

If you want a integer you can run:

```bash
npx faker int
```

## Whats next

Upcoming features might include:

### Localization

You should be able to provide a specific locale for localized data.
Currently, the CLI will always use the default `en` locale.
This feature could look like this:

```bash
npx faker --locale de firstName
```

This example would print a first name of the German locale.

# Support for All Parameters of `@faker-js/faker` Natively

This CLI is an MVP, currently.
This means that it does the bare minimum.
If you want an integer in a specific range, you are on your own.

In the future such a feature could look like this:

```bash
npx faker int --min 10 --max 20
```

This example will print an integer between 10 and 20.
`min` and `max` are options that are available in [Faker's int options](https://fakerjs.dev/api/number.html#int).

# Better Documentation in the Terminal

Developers usually hate to switch work environments.
If you are already working in the terminal, you likely don't want to leave to check what to look up a little detail.
Instead you expect the CLI to have a proper `--help` documentation, including examples.
In the future, this should be the case.
