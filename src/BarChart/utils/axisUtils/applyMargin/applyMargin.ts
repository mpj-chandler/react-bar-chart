import { AxisRange } from '../../../__types__/axisTypes';

export function applyMargin(range: AxisRange, margin: number) {
    if (range.max <= 0) {
        return { min: range.min / (1 - margin / 100), max: range.max * (1 - margin / 100) };
    }

    if (range.min < 0) {
        return { min: range.min / (1 - margin / 100), max: range.max * (1 + margin / 100) };
    }

    return { min: range.min / (1 + margin / 100), max: range.max * (1 + margin / 100) };
}
