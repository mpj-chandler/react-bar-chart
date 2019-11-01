import React from 'react';
import styles from './StackedBarPlot.scss';
import StackedBar from '../StackedBar/StackedBar';
import { getYAxisRange } from '../../utils/axisUtils/getYAxisRange/getYAxisRange';
import { getXAxisRange } from '../../utils/axisUtils/getXAxisRange/getXAxisRange';
import { Placement } from '../../enums/Placement';
import { extractDataType } from '../../utils/axisUtils/generateAxisLabels/extractDataType';
import DataType from '../../enums/DataType';
import Axis from '../../enums/Axis';
import { Padding } from '../../__types__/styling';
import { SeriesData, NonNullNumericDataPoint, NumericDataPoint, NamedDataPoint, DateIndexedDataPoint, SeriesConfig, DataPoint } from '../../__types__/seriesTypes';
import { AxisConfig, AxisRange } from '../../__types__/axisTypes';
import AnimationEasingType from '../../enums/AnimationEasingFunction';

export interface BarPlotProps {
    padding: Padding;
    data: SeriesData[];
    xAxisConfig?: AxisConfig;
    yAxisConfig?: AxisConfig;
    fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => string;
    animationEasingFunction: AnimationEasingType;
}

const StackedBarPlot: React.FC<BarPlotProps> = (props: BarPlotProps) => {

    const renderSeries: (seriesData: SeriesData, config: SeriesConfig) => React.ReactNode = (seriesData, config) => {
        return seriesData.points.map(
            (
                point: NonNullNumericDataPoint | NumericDataPoint | NamedDataPoint | DateIndexedDataPoint,
                index: number,
            ) => {
            if (point.x !== null && point.y1 !== null) {
                return (
                    <StackedBar
                        key={`${seriesData.seriesName}${point.x}`}
                        point={point}
                        { ...config }
                        width={10}
                        stroke={'black'}
                        numBars={seriesData.points.length}
                        placement={placement}
                        index={index}
                        animationEasingType={props.animationEasingFunction}
                        fillFormatter={props.fillFormatter}
                    />
                );
            }

            return null;
        });
    }


    const xRange = getXAxisRange(props.data, props.xAxisConfig);
    const yRange = getYAxisRange(props.data, props.yAxisConfig);
    const placement = props.xAxisConfig ? props.xAxisConfig.tickPlacement : Placement.Aligned;
    const dataType: DataType = extractDataType(props.data, Axis.XAxis);

    return (
        <svg className={styles.BarPlot}>
            <g>
                {props.data.map((seriesData: SeriesData, index: number) => {
                    const seriesConfig: SeriesConfig = {
                        numSeries: props.data.length,
                        seriesIndex: index,
                        padding: props.padding,
                        dataType,
                        xRange,
                        yRange,
                        placement,
                    };

                    return renderSeries(seriesData, seriesConfig);
                })}
            </g>
        </svg>
    );
}

export default StackedBarPlot;

