import { AxisConfig, AxisRange } from '../../../__types__/axisTypes';
import { SeriesData } from '../../../__types__/seriesTypes';
import { applyAxisConfig } from '../applyAxisConfig/applyAxisConfig';
import extractMaximumAndMinimum from '../extractMaximumAndMinimum/extractMaximumAndMinimum';
import Axis from '../../../enums/Axis';

export function getYAxisRange(data: SeriesData[], config?: AxisConfig) {
    let range: AxisRange = extractMaximumAndMinimum(data, Axis.YAxis);

    if (config) {
        range = applyAxisConfig(range, config);
    }

    return range;
}
