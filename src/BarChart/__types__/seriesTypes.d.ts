import DataType from "../enums/DataType";
import { Padding } from "./stylingTypes";
import { AxisRange } from "./axisTypes";
import Placement from "../enums/Placement";

export interface DataPoint {
    tag?: string;
}

export interface NamedDataPoint extends DataPoint {
    x: string;
    y: number;
}

export interface DateIndexedDataPoint extends DataPoint {
    x: Date;
    y: number;
}

export interface NumericDataPoint extends DataPoint {
    x: number | null;
    y: number | null;
}

export interface NonNullNumericDataPoint extends NumericDataPoint {
    x: number;
    y: number;
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