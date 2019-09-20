import Axis from '../../../enums/Axis';
import { SeriesData } from '../../../__types__/seriesTypes';
import DataType from '../../../enums/DataType';
export function extractDataType(seriesData: SeriesData[], axis: Axis): DataType {
    let type: DataType | null = null;
    seriesData.forEach((series: SeriesData) => {
        const newType = axis === Axis.XAxis ? series.type.x : series.type.y;
        if (type === null) {
            type = newType;
        } else if (type !== newType) {
            throw new Error('Error in axis calibration: all series data plotted on a given axis must be of the same type!');
        }
    });
    if (type === null) {
        throw new Error('Error in axis calibration: unable to determine what type of data is being plotted!');
    }

    return type;
}
