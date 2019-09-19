import { AxisRange } from '../../../__types__/axisTypes';

export function applyBucketPlacement(range: AxisRange, numPoints: number) {
    const step = (range.max - range.min) / numPoints;

    return { ...range, max: range.max + step };
}
