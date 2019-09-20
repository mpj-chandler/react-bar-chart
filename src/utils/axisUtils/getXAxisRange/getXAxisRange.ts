import Placement from '../../../enums/Placement';
import { applyAxisConfig } from '../applyAxisConfig/applyAxisConfig';
import { applyBucketPlacement } from '../applyBucketPlacement/applyBucketPlacement';
import extractMaximumAndMinimum from '../extractMaximumAndMinimum/extractMaximumAndMinimum';
import Axis from '../../../enums/Axis';
import { extractDataType } from '../generateAxisLabels/extractDataType';
import DataType from '../../../enums/DataType';
import { DataPoint, SeriesData, NamedDataPoint } from '../../../__types__/seriesTypes';
import { AxisConfig, AxisRange } from '../../../__types__/axisTypes';

export function getXAxisRange(seriesData: SeriesData[], config?: AxisConfig) {
    const dataType: DataType = extractDataType(seriesData, Axis.XAxis);

    switch(dataType) {
        case DataType.NonNullNumeric:
        case DataType.Numeric:
            return extractNumericXAxisRange(seriesData, config);
        case DataType.Named:
            return extractNamedXAxisRange(seriesData, config);
        default:
            throw new Error('Error in XAxis calibration - unrecognised data type!');
    }
}

function extractNamedXAxisRange(seriesData: SeriesData[], config?: AxisConfig) {
    const labels: Set<string> = new Set([]);

    seriesData.forEach((data: SeriesData) => {
        data.points.forEach((point: DataPoint) => {
            labels.add((point as NamedDataPoint).x);
        });
    });

    if (Array.from(labels).length === 0) {
        throw new Error('Error in XAxis calibration - unable to extract any data points!');
    }

    let range: AxisRange = {
        min: 0,
        max: Array.from(labels).length - 1,
    };

    if (config) {
        if (config.tickPlacement === Placement.Bucket) {
            range = applyBucketPlacement(range, seriesData[0].points.length);
        }
        range = applyAxisConfig(range, config);
    }

    return range;
}

function extractNumericXAxisRange(seriesData: SeriesData[], config?: AxisConfig) {
    let range: AxisRange = extractMaximumAndMinimum(seriesData, Axis.XAxis);
    if (config) {
        if (config.tickPlacement === Placement.Bucket) {
            range = applyBucketPlacement(range, seriesData[0].points.length);
        }
        range = applyAxisConfig(range, config);
    }

    return range;
}

