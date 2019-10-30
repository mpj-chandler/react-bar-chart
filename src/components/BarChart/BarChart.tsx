import React from 'react';
import styles from './BarChart.scss';
import XAxis from '../XAxis/XAxis';
import YAxis from '../YAxis/YAxis';

import BarPlot from '../BarPlot/BarPlot';
import { SeriesData } from '../../__types__/seriesTypes';
import { Padding } from '../../__types__/styling';
import { AxisConfig } from '../../__types__/axisTypes';
import AnimationEasingType from '../../enums/AnimationEasingFunction';

export interface BarChartProps {
    data: SeriesData[];
    title: string;
    padding: Padding;
    xAxisConfig?: AxisConfig;
    yAxisConfig?: AxisConfig;
    animationEasingType: AnimationEasingType;
}

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
    return (
        <div className={styles.BarChart}>
            <div className={styles.BarChart__title}>{props.title}</div>
            <YAxis
                title={'YAxis'}
                data={props.data}
                config={props.yAxisConfig}
                padding={props.padding}/>
            <BarPlot
                data={props.data}
                padding={props.padding}
                xAxisConfig={props.xAxisConfig}
                yAxisConfig={props.yAxisConfig}
                animationEasingFunction={props.animationEasingType}
            />
            <XAxis
                title={'XAxis'}
                data={props.data}
                config={props.xAxisConfig}
                padding={props.padding}
            />
        </div>
    )
}

export default BarChart;
