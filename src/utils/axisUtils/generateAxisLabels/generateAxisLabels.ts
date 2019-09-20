import Axis from '../../../enums/Axis';
import calculateTickInterval from '../calculateTickInterval/calculateTickInterval';
import { getXAxisRange } from '../getXAxisRange/getXAxisRange';
import { getYAxisRange } from '../getYAxisRange/getYAxisRange';
import { SeriesData, DataPoint, NamedDataPoint } from '../../../__types__/seriesTypes';
import { AxisRange } from '../../../__types__/axisTypes';
import DataType from '../../../enums/DataType';
import { extractDataType } from './extractDataType';
import { number } from 'prop-types';

function generateAxisLabels(seriesData: SeriesData[], axis: Axis):
    { dataType: DataType, labels: Array<{ index: number, label: string}> } {

    const dataType = extractDataType(seriesData, axis);

    switch (dataType) {
        case DataType.NonNullNumeric:
        case DataType.Numeric:
            return { dataType, labels: generateScaledNumericAxisLabels(seriesData, axis) };
        case DataType.Named:
            return { dataType, labels: generateNamedAxisLabels(seriesData, axis) };
        default:
            throw new Error('Error in axis calibration: unrecognised data type!');
    }
}

function generateScaledNumericAxisLabels(seriesData: SeriesData[], axis: Axis): Array<{ index: number, label: string}> {
    const labels: Array<{ index: number, label: string}> = [];
    let range: AxisRange;
    if (axis === Axis.XAxis) {
        range = getXAxisRange(seriesData);
    } else {
        range = getYAxisRange(seriesData);
    }

    const tickInterval = calculateTickInterval(range);
    const decimals = -1 * Math.min(0, Math.log10(tickInterval));
    let firstTickValue: number = 0;
    let index: number = 0;

    while (firstTickValue > range.min) {
        firstTickValue -= tickInterval;
    }
    let currentValue: number = firstTickValue;

    while (currentValue < range.max + tickInterval) {
        labels.push({ index, label: currentValue.toFixed(decimals) });
        currentValue += tickInterval;
        index += 1;
    }

    return labels;
}

function generateNamedAxisLabels(seriesData: SeriesData[], axis: Axis): Array<{ index: number, label: string}> {
    if (axis === Axis.YAxis) {
        throw new Error('Error in axis calibration: only numeric values currently allowed on y axis!');
    }

    const labels: Array<{ index: number, label: string}> = [];

    seriesData.forEach((data: SeriesData) => {
        data.points.forEach((point: DataPoint, index: number) => {
            labels.push({ index, label: (point as NamedDataPoint).x });
        });
    });

    return labels;
}

export default generateAxisLabels;
