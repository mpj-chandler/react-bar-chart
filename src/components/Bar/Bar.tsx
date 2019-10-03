import React from 'react';
import { useAnimation } from '../../utils/hooks/useAnimation/useAnimation';
import { Placement } from '../../enums/Placement';
import { NonNullNumericDataPoint, NamedDataPoint, DateIndexedDataPoint } from '../../__types__/seriesTypes';
import { AxisRange } from '../../__types__/axisTypes';
import { Padding } from '../../__types__/styling';
import { getBarXPosition } from './utils/getBarXPosition';
import DataType from '../../enums/DataType';

export interface BarProps {
    point: NonNullNumericDataPoint | NamedDataPoint | DateIndexedDataPoint;
    index: number;
    seriesIndex: number;
    dataType: DataType;
    yRange: AxisRange;
    xRange: AxisRange;
    width: number;
    fill: string;
    stroke: string;
    padding: Padding;
    numBars: number;
    numSeries: number;
    placement: Placement;
}

function getBarEndingHeight(props: BarProps): number {
    const yMin = Math.min(0, Math.max(0, props.yRange.min));
    const totalVerticalPadding = props.padding.top + props.padding.bottom;

    if (props.yRange.max <= 0) {
        return (100 - totalVerticalPadding) * ((yMin - props.point.y) / (props.yRange.min - props.yRange.max));
    }

    return (100 - totalVerticalPadding) * ((props.point.y - yMin) / (props.yRange.max - props.yRange.min));
}

function getZeroPoint(props: BarProps): number {
    return (props.yRange.max / (props.yRange.max - props.yRange.min));
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
    const animation = useAnimation('elastic', 600, 0);
    const yStart = (() => {
        if (props.yRange.max <= 0) {
            return props.padding.top;
        }

        return ((100 - (props.padding.top + props.padding.bottom)) * zeroPoint) + props.padding.top;
    })();

    return (
        <rect
            x={`${x - props.width / 2}%`}
            y={`${getY(animation * height, yStart, props.point.y)}%`}
            height={`${props.point.y < 0 ? -1 * animation * height : animation * height}%`}
            width={`${props.width / props.numSeries}%`}
            fill={props.fill}
            stroke={props.stroke}
        >
        </rect>
    );
}

export default Bar;
