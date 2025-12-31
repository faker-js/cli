import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    name: 'linter options',
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  {
    name: 'Global Language Options',
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    name: 'TypeScript Source Files',
    extends: [eslint.configs.recommended, tseslint.configs.strictTypeChecked],
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
