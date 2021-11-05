import { blue, cyan, green, magenta, red, yellow } from "https://deno.land/std@0.112.0/fmt/colors.ts";

const prefix = (text: string) => `[${text.toUpperCase()}]`;

export const dev = (...msgs: string[]) => console.log(magenta(prefix('dev')), '👾', ...msgs.map(magenta));
export const docs = (...msgs: string[]) => console.log(cyan(prefix('docs')), '📝', ...msgs.map(cyan));
export const error = (...msgs: string[]) => console.log(red(prefix('error')), '💥', ...msgs.map(red));
export const info = (...msgs: string[]) => console.log(blue(prefix('info')), 'ℹ️ ', ...msgs.map(blue));
export const ok = (...msgs: string[]) => console.log(green(prefix('ok')), '✅', ...msgs.map(green));
export const warn = (...msgs: string[]) => console.log(yellow(prefix('warn')), '⚠️ ', ...msgs.map(yellow));

export const done = () => ok('Done!');
