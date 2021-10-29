import { blue, green, red, yellow } from "https://deno.land/std@0.112.0/fmt/colors.ts";

export const error = (...msgs: string[]) => console.log(red('==> [ERROR]'), ...msgs.map(red));

export const info = (...msgs: string[]) => console.log(blue('==> [INFO]'), ...msgs.map(blue));

export const ok = (...msgs: string[]) => console.log(green('==> [OK]'), ...msgs.map(green));

export const warn = (...msgs: string[]) => console.log(yellow('==> [WARN]'), ...msgs.map(yellow));
