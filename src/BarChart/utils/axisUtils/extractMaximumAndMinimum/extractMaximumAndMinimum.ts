import Axis from '../../../enums/Axis';
import { SeriesData, DataPoint, NumericDataPoint } from '../../../__types__/seriesTypes';
import { AxisRange } from '../../../__types__/axisTypes';

function extractMaximumAndMinimum(data: SeriesData[], axis: Axis): AxisRange {
    let min: number | null = null;
    let max: number | null = null;

    data.forEach((seriesData: SeriesData) => {
        seriesData.points.forEach((point: DataPoint) => {
            const numericPoint = (point as NumericDataPoint);
            const value = axis === Axis.XAxis ? numericPoint.x : numericPoint.y;
            if ( value !== null ) {
                if (min === null || value < min) {
                    min = value;
                }
                if (max === null || value > max) {
                    max = value;
                }
            }
        });
    });

    if (min === null || max === null) {
        throw new Error(`Error! Unable to extract maximum and minimum for: ${data}. Please check it has the correct format.`);
    }

    return { min, max };
}

export default extractMaximumAndMinimum;
