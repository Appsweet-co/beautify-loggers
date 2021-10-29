#!/usr/bin/env node

const { blue, cyan, green, magenta, red, yellow } = require('chalk');

const prefix = (text) => `==> [${text.toUpperCase()}]`;

const docs = (...msg) => console.warn(cyan(prefix('docs'), '📝', ...msg));
const error = (...msg) => console.error(red(prefix('error'), '💥', ...msg));
const info = (...msg) => console.log(blue(prefix('info'), 'ℹ️ ', ...msg));
const ok = (...msg) => console.log(green(prefix('ok'), '✅', ...msg));
const warn = (...msg) => console.warn(yellow(prefix('warn'), '⚠️ ', ...msg));
const dev = (...msg) => console.log(magenta(prefix('dev'), '👾', ...msg));

const done = () => ok('Done!');

module.exports = {
  dev, docs, done, error, info, ok, warn
}
