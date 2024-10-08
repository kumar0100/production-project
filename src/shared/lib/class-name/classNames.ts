export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
    className: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => [
    className,
    ...additional,
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');
