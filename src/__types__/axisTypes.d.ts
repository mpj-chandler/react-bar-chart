import { SeriesData, NumericDataPoint } from './seriesTypes';
import { Padding } from './styling';
import { Placement } from '../enums/Placement';

export interface AxisRange {
    min: number;
    max: number;
}

export interface AxisProps {
    data: SeriesData[];
    title: string;
    padding: Padding;
    config?: AxisConfig;
}

export interface AxisConfig {
    zeroIntercept: boolean;
    margin: number;
    tickPlacement: Placement;
    tickLength: number;
    titlePos?: {
        xPos: number,
        yPos: number
    }
}

export interface AxisTickProps {
    data: SeriesData[];
    padding: Padding;
    config?: AxisConfig;
}

