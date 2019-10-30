import AnimationEasingType from '../../../enums/AnimationEasingFunction';

function getEasingFunction(animation: AnimationEasingType) {
    switch (animation) {
        case AnimationEasingType.Linear:
            return (n: number) => n;
        case AnimationEasingType.Elastic:
            return (n: number) => n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15);
        case AnimationEasingType.InExpo:
            return (n: number) => Math.pow(2, 10 * (n - 1));
        default:
            throw new Error(`Easing function ${animation} not recognised!`);
    }
}

export default getEasingFunction;