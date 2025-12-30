#!/usr/bin/env node

import('../dist/src/index.js').then(({ cli }) => cli(process.argv));
