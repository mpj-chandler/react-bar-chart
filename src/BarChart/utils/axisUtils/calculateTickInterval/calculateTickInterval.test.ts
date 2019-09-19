import { AxisRange } from '../../../__types__/axisTypes';
import calculateTickInterval from './calculateTickInterval';

describe('calculateTickInterval', () => {
    describe('when using default sensitivity (0.25)', () => {
        it('it calculates the appropriate interval when modulus(max) or modulus(min) are less than 1', () => {
            const range: AxisRange = { min: -0.5, max: 1 };

            expect(calculateTickInterval(range)).toEqual(0.1);
        });

        it('it calculates the appropriate interval when modulus(max) or modulus(min) are less than 10', () => {
            const range: AxisRange = { min: -5, max: 10 };

            expect(calculateTickInterval(range)).toEqual(1);
        });

        it('it calculates the appropriate interval when modulus(max) or modulus(min) are less than 100', () => {
            const range: AxisRange = { min: -95, max: 1 };

            expect(calculateTickInterval(range)).toEqual(10);
        });

        it('it calculates the appropriate interval when modulus(max) or modulus(min) are less than 1000', () => {
            const range: AxisRange = { min: -95, max: 862 };

            expect(calculateTickInterval(range)).toEqual(100);
        });

        it('it calculates the appropriate interval when modulus(max) or modulus(min) are less than 10000', () => {
            const range: AxisRange = { min: -9500, max: 2 };

            expect(calculateTickInterval(range)).toEqual(1000);
        });

        it('it calculates the appropriate interval when modulus(max) or modulus(min) are less than 100000', () => {
            const range: AxisRange = { min: -95, max: 65987 };

            expect(calculateTickInterval(range)).toEqual(10000);
        });

        it('it throws an error when the range maximum is equal to the range minimum', () => {
            const range: AxisRange = { min: -5, max: -5 };

            expect(() => calculateTickInterval(range)).toThrowErrorMatchingSnapshot();
        });

        it('it throws an error when the range maximum is less than the range minimum', () => {
            const range: AxisRange = { min: -5, max: -50 };

            expect(() => calculateTickInterval(range)).toThrowErrorMatchingSnapshot();
        });
    });

    describe('when using custom sensitivity', () => {

        for (let sensitivity = 0; sensitivity < 1; sensitivity += 0.1) {
            it(`it calculates the appropriate interval when modulus(max) or modulus(min) are less than 100 and sensitivity is ${sensitivity}.`, () => {
                const range: AxisRange = { min: -10, max: 10 };

                expect(calculateTickInterval(range, sensitivity)).toEqual(sensitivity >= 0.4 ? 1 : 10);
            });
        }
    });
});
