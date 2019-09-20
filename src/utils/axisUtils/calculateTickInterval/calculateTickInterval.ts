import { AxisRange } from '../../../__types__/axisTypes';

function calculateTickInterval(range: AxisRange, sensitivity: number = 0.25): number {
    if (range.max <= range.min) {
        throw new Error('Error! Range maximum has to be greater than range minimum.');
    }
    const interval = range.max - range.min;
    const power = Math.log10(interval) - 1;
    const remainder = power - Math.floor(power);

    if (remainder > sensitivity) {
        return Math.pow(10, Math.ceil(Math.log10(interval)) - 1);
    }

    return Math.pow(10, Math.round(Math.log10(interval)) - 1);
}

export default calculateTickInterval;

