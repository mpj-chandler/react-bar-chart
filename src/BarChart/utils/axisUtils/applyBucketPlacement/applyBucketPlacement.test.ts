import { AxisRange } from '../../../__types__/axisTypes';
import { applyBucketPlacement } from './applyBucketPlacement';

describe('applyBucketPlacement', () => {
    const min = 10;
    const range: AxisRange = { min, max: 100 };
    const numBars: number = 15;

    it('it transforms the axis ticks as expected', () => {
        expect(applyBucketPlacement(range, numBars).min).toEqual(10);
        expect(applyBucketPlacement(range, numBars).max).toEqual(106);
    });
});
