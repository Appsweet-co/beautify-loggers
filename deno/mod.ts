import { blue, cyan, green, magenta, red, yellow } from "https://deno.land/std@0.220.1/fmt/colors.ts";

function prefix(text: string) {
  return `[${text.toUpperCase()}]`;
}

export function dev(...msgs: string[]) {
  console.log(magenta(prefix('dev')), '👾', ...msgs.map(magenta));
}

export function docs(...msgs: string[]) {
  console.log(cyan(prefix('docs')), '📝', ...msgs.map(cyan));
}

export function error(...msgs: string[]) {
  console.log(red(prefix('error')), '💥', ...msgs.map(red));
}

export function info(...msgs: string[]) {
  console.log(blue(prefix('info')), 'ℹ️ ', ...msgs.map(blue));
}

export function ok(...msgs: string[]) {
  console.log(green(prefix('ok')), '✅', ...msgs.map(green));
}

export function warn(...msgs: string[]) {
  console.log(yellow(prefix('warn')), '⚠️ ', ...msgs.map(yellow));
}

export function done() {
  ok('Done!');
}
