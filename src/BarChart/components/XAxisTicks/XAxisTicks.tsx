import React from 'react';
import styles from './XAxisTicks.scss';
import Axis from '../../enums/Axis';
import generateAxisLabels from '../../utils/axisUtils/generateAxisLabels/generateAxisLabels';
import { AxisTickProps } from '../../__types__/axisTypes';
import { getTickTextXPosition } from '../XAxis/utils/getTickTextXPosition';
import { getTickXPosition } from '../XAxis/utils/getTickXPosition';
import AxisTickLabel from '../AxisTickLabel/AxisTickLabel';
import DataType from '../../enums/DataType';

export function renderTick(
    label: string,
    x1: number,
    y1: number,
    props: AxisTickProps,
    textXPos: number,
    index: number,
    tickLength: number = 5,
    ) {
    const y2 = y1 === props.padding.top ? y1 - tickLength / 2 : y1 + tickLength;

    return (
        <g key={`tickGroup-${label}-${index}`}>
            <line
                key={`tickLine-${label}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x1}%`}
                y2={`${y2}%`}
                stroke={'black'}
            />
            <AxisTickLabel
                key={`tickText-${label}`}
                xPos={textXPos}
                yPos={y2}
                label={label}
                axis={Axis.XAxis}
            />
        </g>
    );
}

export interface XAxisTickProps extends AxisTickProps {
    y1: number;
}

const XAxisTicks: React.FC<XAxisTickProps> = (props) => {

    const tickLabels: { dataType: DataType, labels: Array<{index: number, label: string }> }
        = generateAxisLabels(props.data, Axis.XAxis);

    return (<g className={styles.XAxisTicks}>
        {tickLabels.labels.map((item: { index: number, label: string }, index: number) => {
            const x1 = getTickXPosition(props, tickLabels.dataType, item);
            const textXPos = getTickTextXPosition(x1, props, tickLabels.dataType, item);

            return renderTick(item.label, x1, props.y1, props, textXPos, index);
        })}
    </g>);
};

export default XAxisTicks;
