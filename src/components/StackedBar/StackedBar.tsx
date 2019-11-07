import React from 'react';
import { useAnimation } from '../../utils/hooks/useAnimation/useAnimation';
import { Placement } from '../../enums/Placement';
import { NonNullNumericDataPoint, NamedDataPoint, DateIndexedDataPoint, DataPoint } from '../../__types__/seriesTypes';
import { AxisRange } from '../../__types__/axisTypes';
import { Padding } from '../../__types__/styling';
import DataType from '../../enums/DataType';
import AnimationEasingType from '../../enums/AnimationEasingFunction';

export interface StackedBarProps {
    point: NonNullNumericDataPoint | NamedDataPoint | DateIndexedDataPoint;
    index: number;
    seriesIndex: number;
    dataType: DataType;
    yRange: AxisRange;
    xRange: AxisRange;
    width: number;
    stroke: string;
    padding: Padding;
    numBars: number;
    numSeries: number;
    placement: Placement;
    fillFormatter?: (seriesIndex: number, dataPoint: DataPoint, index: number) => string;
    animationEasingType?: AnimationEasingType;
}

function getStackedBarEndingHeight(props: StackedBarProps): number {
    const yMin = Math.min(0, Math.max(0, props.yRange.min));
    const totalVerticalPadding = props.padding.top + props.padding.bottom;

    if (props.yRange.max <= 0) {
        return (100 - totalVerticalPadding) * ((yMin - props.point.y1) / (props.yRange.min - props.yRange.max));
    }

    return (100 - totalVerticalPadding) * ((props.point.y1 - yMin) / (props.yRange.max - props.yRange.min));
}

function getStackedBarXPosition(props: StackedBarProps): number {
    const interval = props.xRange.max - props.xRange.min;
    const totalHorizontalPadding = props.padding.right + props.padding.left;

    switch (props.dataType) {
        case DataType.NonNullNumeric:
            return getNumericStackedBarXPosition(props, interval, totalHorizontalPadding);
        case DataType.Named:
            return getNamedStackedBarXPosition(props, interval, totalHorizontalPadding);
        default:
            throw new Error('Error in rendering bar! Unrecognized data type!');
    }
}

function getNumericStackedBarXPosition(props: StackedBarProps, interval: number, totalHorizontalPadding: number): number {
    
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

function getNamedStackedBarXPosition(props: StackedBarProps, interval: number, totalHorizontalPadding: number): number {

    if (props.placement === Placement.Bucket) {
        const step = 0.5 * interval / props.numBars;

        return ((100 - totalHorizontalPadding)
            * (step + (props.index)) / interval)
            + props.padding.left;
    }

    return ((100 - totalHorizontalPadding)
        * (props.index / interval)
        + props.padding.left);
}



function getZeroPoint(props: StackedBarProps, animation: number): number {
    return ((props.yRange.max - animation * props.point.y0) / (props.yRange.max - props.yRange.min));
}

function getY(animation: number, height: number, yStart: number, value: number) {
    return yStart - (animation * height);
}

const defaultProps: Partial<StackedBarProps> = {
    animationEasingType: AnimationEasingType.None,
    fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => '#FFF',
};

const StackedBar: React.FC<StackedBarProps> = (props: StackedBarProps) => {

    const adjProps: StackedBarProps = { ...defaultProps, ...props };

    const x = getStackedBarXPosition(props);
    const height = getStackedBarEndingHeight(adjProps);
    const animation = adjProps.animationEasingType === AnimationEasingType.None ? 1 : useAnimation(adjProps.animationEasingType, 600, 0);
    const zeroPoint = getZeroPoint(adjProps, animation);
    const yStart = (() => {
        if (adjProps.yRange.max <= 0) {
            return adjProps.padding.top;
        }
        return ((100 - (adjProps.padding.top + adjProps.padding.bottom)) * zeroPoint) + adjProps.padding.top;
    })();

    const fill = adjProps.fillFormatter(adjProps.seriesIndex, adjProps.point, adjProps.index);

    return (
        <rect
            x={`${x - adjProps.width / 2}%`}
            y={`${getY(animation, height, yStart, adjProps.point.y1)}%`}
            height={`${animation * height}%`}
            width={`${adjProps.width}%`}
            fill={fill}
            stroke={adjProps.stroke}
        >
        </rect>
    );
}

export default StackedBar;
