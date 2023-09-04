# Faker-CLI

A CLI of [@faker-js/faker](https://github.com/faker-js/faker).

> **Note**: This is currently a [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product).

## Install

```bash
npm install --save-dev @faker-js/cli
```

## Usage

```
faker module_name method_name
```

Faker-CLI expects a `module_name` as well as a `method_name` depending on the module chosen.

To list all possible modules run:

```bash
faker --help
```

To list all possible methods of a module run:

```bash
faker module_name --help
```

## Whats next

Upcoming features might include:

- localization
- support for all parameters `@faker-js/faker` natively
- make the CLI consumable for your own modules
