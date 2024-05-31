type Mods = Record<string, boolean | string>

export const classNames = (className: string, mods: Mods, additional: string[]) => {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    ].join(' ')
}