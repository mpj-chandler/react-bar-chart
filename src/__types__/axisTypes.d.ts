import { SeriesData } from './seriesTypes';
import Padding from './stylingTypes';
import Placement from '../enums/Placement';

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
}

export interface AxisTickProps {
    data: SeriesData[];
    padding: Padding;
    config?: AxisConfig;
}

