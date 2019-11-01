import DataType from '../enums/DataType';
import { Padding } from './styling';
import { AxisRange } from './axisTypes';
import { Placement } from '../enums/Placement';

export interface DataPoint {
    tag?: string;
    y0?: number | null;
    y1: number | null;
}

export interface NamedDataPoint extends DataPoint {
    x: string;    
}

export interface DateIndexedDataPoint extends DataPoint {
    x: Date;
}

export interface NumericDataPoint extends DataPoint {
    x: number;
}

export interface NonNullNumericDataPoint extends NumericDataPoint {
    x: number;
}

export interface SeriesData {
    seriesName: string;
    type: {
        x: DataType,
        y: DataType,
    };
    points: Array<NamedDataPoint | DateIndexedDataPoint | NumericDataPoint | NonNullNumericDataPoint>;
}

export interface SeriesConfig {
    numSeries: number,
    seriesIndex: number,
    padding: Padding,
    dataType: DataType,
    xRange: AxisRange,
    yRange: any,
    placement: Placement
}