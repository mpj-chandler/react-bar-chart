import React from 'react';
import styles from './Chart.scss';
import XAxis from '../XAxis/XAxis';
import YAxis from '../YAxis/YAxis';

import BarPlot from '../BarPlot/BarPlot';
import { SeriesData, DataPoint } from '../../__types__/seriesTypes';
import { Padding } from '../../__types__/styling';
import { AxisConfig } from '../../__types__/axisTypes';
import AnimationEasingType from '../../enums/AnimationEasingFunction';
import ChartType from '../../enums/ChartType';
import stackSeries from '../StackedBarPlot/stackSeries';
import stackAndNormaliseSeries from '../StackedBarPlot/stackAndNormaliseSeries';
import StackedBarPlot from '../StackedBarPlot/StackedBarPlot';

export interface ChartProps {
    data: SeriesData[];
    type: ChartType;
    title: string;
    padding: Padding;
    xAxisConfig?: AxisConfig;
    yAxisConfig?: AxisConfig;
    fillFormatter?: (seriesIndex: number, dataPoint: DataPoint, index: number) => string;
    animationEasingType?: AnimationEasingType;
}

const Chart: React.FC<ChartProps> = (props: ChartProps) => {
    const renderPlot = () => {
        if (props.type === ChartType.BarChart) {
            return (
                <BarPlot
                    data={props.data}
                    padding={props.padding}
                    xAxisConfig={props.xAxisConfig}
                    yAxisConfig={props.yAxisConfig}
                    animationEasingFunction={props.animationEasingType}
                    fillFormatter={props.fillFormatter}
                />
            );
        }

        if (props.type === ChartType.StackedBarChart) {

            return (
                <StackedBarPlot
                    data={stackSeries(props.data)}
                    padding={props.padding}
                    xAxisConfig={props.xAxisConfig}
                    yAxisConfig={props.yAxisConfig}
                    animationEasingFunction={props.animationEasingType}
                    fillFormatter={props.fillFormatter}
                />
            );
        }

        return (
            <StackedBarPlot
                data={stackAndNormaliseSeries(props.data)}
                padding={props.padding}
                xAxisConfig={props.xAxisConfig}
                yAxisConfig={props.yAxisConfig}
                animationEasingFunction={props.animationEasingType}
                fillFormatter={props.fillFormatter}
            />
        );
    }

    return (
        <div className={styles.BarChart}>
            <div className={styles.BarChart__title}>{props.title}</div>
            <YAxis
                title={'YAxis'}
                data={props.type === ChartType.StackedBarChart ? stackSeries(props.data) : props.data}
                config={props.yAxisConfig}
                padding={props.padding}
            />
            { renderPlot() }
            <XAxis
                title={'XAxis'}
                data={props.data}
                config={props.xAxisConfig}
                padding={props.padding}
            />
        </div>
    )
}

export default Chart;
