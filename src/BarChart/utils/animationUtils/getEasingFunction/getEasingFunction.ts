function getEasingFunction(name: string) {
    switch (name) {
        case 'linear':
            return (n: number) => n;
        case 'elastic':
            return (n: number) => n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15);
        case 'inExpo':
            return (n: number) => Math.pow(2, 10 * (n - 1));
        default:
            throw new Error(`Easing function ${name} not recognised!`);
    }
}

export default getEasingFunction;