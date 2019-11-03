import React from 'react';
import { useAnimation } from '../../utils/hooks/useAnimation/useAnimation';
import { Placement } from '../../enums/Placement';
import { NonNullNumericDataPoint, NamedDataPoint, DateIndexedDataPoint, DataPoint } from '../../__types__/seriesTypes';
import { AxisRange } from '../../__types__/axisTypes';
import { Padding } from '../../__types__/styling';
import { getBarXPosition } from './utils/getBarXPosition';
import DataType from '../../enums/DataType';
import AnimationEasingType from '../../enums/AnimationEasingFunction';

export interface BarProps {
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
    fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => string;
    animationEasingType: AnimationEasingType;
}

function getBarEndingHeight(props: BarProps): number {
    const yMin = Math.min(0, Math.max(0, props.yRange.min));
    const totalVerticalPadding = props.padding.top + props.padding.bottom;

    if (props.yRange.max <= 0) {
        return (100 - totalVerticalPadding) * ((yMin - props.point.y1) / (props.yRange.min - props.yRange.max));
    }

    return (100 - totalVerticalPadding) * ((props.point.y1 - yMin) / (props.yRange.max - props.yRange.min));
}

function getZeroPoint(props: BarProps): number {
    return ((props.yRange.max - props.point.y0) / (props.yRange.max - props.yRange.min));
}

function getY(height: number, yStart: number, value: number) {

    if (value >= 0) {
        return yStart - height;
    }

    return yStart;
}

const Bar: React.FC<BarProps> = (props: BarProps) => {

    const x = getBarXPosition(props);
    const height = getBarEndingHeight(props);
    const zeroPoint = getZeroPoint(props);
    const animation = props.animationEasingType === AnimationEasingType.None ? 1 : useAnimation(props.animationEasingType, 600, 0);
    const yStart = (() => {
        if (props.yRange.max <= 0) {
            return props.padding.top;
        }
        return ((100 - (props.padding.top + props.padding.bottom)) * zeroPoint) + props.padding.top;
    })();

    const fill = props.fillFormatter(props.seriesIndex, props.point, props.index);

    return (
        <rect
            x={`${x - props.width / 2}%`}
            y={`${getY(animation * height, yStart, props.point.y1)}%`}
            height={`${props.point.y1 < 0 ? -1 * animation * height : animation * height}%`}
            width={`${props.width / props.numSeries}%`}
            fill={fill}
            stroke={props.stroke}
        >
        </rect>
    );
}

export default Bar;
