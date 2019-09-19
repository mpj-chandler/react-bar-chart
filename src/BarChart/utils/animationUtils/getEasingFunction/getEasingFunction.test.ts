import getEasingFunction from './getEasingFunction';

describe('getEasingFunction', () => {
    describe('when called with a recognised function name', () => {
        const input: number = 2;
        const cases: Array<{name: string, output: number}> = [
            { name: 'linear', output: 2 },
            { name: 'elastic', output: 130 },
            { name: 'inExpo', output: 1024 },
        ];

        cases.forEach((value: {name: string, output: number}) => {
            it(`it retrieves the correct easing function when called with ${value.name}`, () => {
                expect(getEasingFunction(value.name)(input)).toBe(value.output);
            });
        });
    });

    describe('when called with an unrecognised function name', () => {
        it('it throws an error', () => {
            expect(() => getEasingFunction('someRandomFunction')).toThrowError('Easing function someRandomFunction not recognised!');
        });
    });

});
