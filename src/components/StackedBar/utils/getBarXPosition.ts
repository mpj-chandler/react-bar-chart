import { Placement } from '../../../enums/Placement';
import { BarProps } from '../StackedBar';
import DataType from '../../../enums/DataType';
import { NonNullNumericDataPoint } from '../../../__types__/seriesTypes';

export function getBarXPosition(props: BarProps): number {
    const interval = props.xRange.max - props.xRange.min;
    const totalHorizontalPadding = props.padding.right + props.padding.left;

    switch (props.dataType) {
        case DataType.NonNullNumeric:
            return getNumericBarXPosition(props, interval, totalHorizontalPadding);
        case DataType.Named:
            return getNamedBarXPosition(props, interval, totalHorizontalPadding);
        default:
            throw new Error('Error in rendering bar! Unrecognized data type!');
    }
}

function getNumericBarXPosition(props: BarProps, interval: number, totalHorizontalPadding: number): number {

    if (props.placement === Placement.Bucket) {
        const step = 0.5 * interval / props.numBars;

        return ((100 - totalHorizontalPadding)
            * ((step + (props.point as NonNullNumericDataPoint).x) / interval))
            + props.padding.left;
    }

    return ((100 - totalHorizontalPadding)
        * ((props.point as NonNullNumericDataPoint).x / interval))
        + props.padding.left;
}

function getNamedBarXPosition(props: BarProps, interval: number, totalHorizontalPadding: number): number {
    const seriesShift = props.seriesIndex * (props.width / props.numSeries);

    if (props.placement === Placement.Bucket) {
        const step = 0.5 * interval / props.numBars;

        return ((100 - totalHorizontalPadding)
            * (step + (props.index)) / interval)
            + seriesShift
            + props.padding.left;
    }

    return ((100 - totalHorizontalPadding)
        * (props.index / interval)
        + seriesShift
        + props.padding.left);
}

