import { AxisRange } from '../../../__types__/axisTypes';
import { applyZeroIntercept } from './applyZeroIntercept';

describe('The applyZeroIntercept function', () => {
    it('it applies the zero intercept correctly when all data points have positive y value', () => {
        const range: AxisRange = { min: 10, max: 100 };

        expect(applyZeroIntercept(range)).toStrictEqual({ min: 0, max: 100});
    });

    it('it applies the zero intercept correctly when all data points have negative y value', () => {
        const range: AxisRange = { min: -100, max: -10 };

        expect(applyZeroIntercept(range)).toStrictEqual({ min: -100, max: 0});
    });

    it('it applies the zero intercept correctly when data points range from positive to negative yValues', () => {
        const range: AxisRange = { min: -100, max: 100 };

        expect(applyZeroIntercept(range)).toStrictEqual({ min: -100, max: 100});
    });
});
