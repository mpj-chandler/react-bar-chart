import React from 'react';
import styles from './YAxis.scss';
import { getYAxisRange } from '../../utils/axisUtils/getYAxisRange/getYAxisRange';
import { getXAxisRange } from '../../utils/axisUtils/getXAxisRange/getXAxisRange';
import generateAxisLabels from '../../utils/axisUtils/generateAxisLabels/generateAxisLabels';
import Axis from '../../enums/Axis';
import AxisTickLabel from '../AxisTickLabel/AxisTickLabel';
import { AxisProps, AxisTickProps, AxisRange } from '../../__types__/axisTypes';
import DataType from '../../enums/DataType';
import AxisTitleLabel from '../AxisTitleLabel/AxisTitleLabel';

function getYAxisXPos(props: AxisProps): number {
    const range = getXAxisRange(props.data, props.config);

    return (100 * (range.min / (range.max - range.min)) + props.padding.left);
}

function renderTicks(props: AxisTickProps, x2: number): JSX.Element {
    const tickLabels: {
        dataType: DataType,
        labels: Array<{index: number, label: string }>,
    } = generateAxisLabels(props.data, Axis.YAxis);

    const range: AxisRange = getYAxisRange(props.data, props.config);
    const interval = range.max - range.min;
    const tickLength = props.config ? props.config.tickLength : 5;

    return (
        <g className={styles.YAxis__Ticks}>
            {tickLabels.labels.map((item: { index: number, label: string }) => {
                const y1 = (((100 - (props.padding.top + props.padding.bottom))
                 * (1 - (Number(item.label) - range.min) / interval)))
                 + props.padding.top;

                return (
                    <g key={item.label}>
                        <line
                            x1={`${x2 - tickLength}%`}
                            y1={`${y1}%`}
                            x2={`${x2}%`}
                            y2={`${y1}%`}
                            stroke={'black'}
                        />
                        <AxisTickLabel
                            key={`tickText-${item.label}`}
                            xPos={x2 - tickLength}
                            yPos={y1}
                            label={item.label}
                            axis={Axis.YAxis}
                        />
                    </g>
                );
            })}
        </g>
    );
};

const YAxis: React.FC<AxisProps> = (props) => {

    const yAxisXPos = getYAxisXPos(props);
    const titlePos =
      props.config && props.config.titlePos ? props.config.titlePos : undefined;

    return (
        <div className={styles.YAxis}>
            <svg className={styles.YAxis__Svg}>
                <line x1={`${yAxisXPos}%`} y1={`${props.padding.top}%`} x2={`${yAxisXPos}%`} y2={`${100 - props.padding.bottom}%`} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                {renderTicks({data: props.data, padding: props.padding, config: props.config}, yAxisXPos)}
                <AxisTitleLabel titlePos={titlePos} label={props.title} axis={Axis.YAxis}/>
            </svg>
        </div>
    );
};

export default YAxis;
