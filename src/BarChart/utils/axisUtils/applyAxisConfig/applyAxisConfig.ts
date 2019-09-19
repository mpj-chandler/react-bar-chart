import { AxisConfig, AxisRange } from '../../../__types__/axisTypes';
import { applyMargin } from '../applyMargin/applyMargin';
import { applyZeroIntercept } from '../applyZeroIntercept/applyZeroIntercept';

export function applyAxisConfig(range: AxisRange, config?: AxisConfig) {

    if (config) {
        if (config.zeroIntercept) {
            range = applyZeroIntercept(range);
        }

        if (config.margin) {
            range = applyMargin(range, config.margin);
        }
    }

    return range;
}
