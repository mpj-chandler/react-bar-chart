import React from 'react';
import Chart, { BarChartProps } from '../src/components/Chart/Chart';
import { Placement } from '../src/enums/Placement';
import DataType from '../src/enums/DataType';
import AnimationEasingType from '../src/enums/AnimationEasingFunction';
import { DataPoint } from '../src/__types__/seriesTypes';
import ChartType from '../src/enums/ChartType';

const styles = {
    width: '70vw',
    height: '80vh',
};
const Container = ({ children }) => <div style={styles}>{children}</div>;

const singleSeriesData = [
    {
        seriesName: 'A',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y1: 10,
            },
            {
                x: 1,
                y1: 20,
            },
            {
                x: 2,
                y1: -30,
            },
        ],
    },
];

const singleSeriesBarChartProps: BarChartProps = {
    title: 'My first bar chart',
    data: singleSeriesData,
    type: ChartType.BarChart,
    padding: { left: 10, right: 10, top: 10, bottom: 10 },
    xAxisConfig: {
        zeroIntercept: true,
        margin: 10,
        tickPlacement: Placement.Bucket,
        tickLength: 2,
    },
    yAxisConfig: {
        zeroIntercept: true,
        margin: 10,
        tickPlacement: Placement.Aligned,
        tickLength: 2,
    },
    fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => {
        if (seriesIndex === 0) {
            if (index < 2) {
                return '#0FF';
            }

            return '#FF0';
        } else if (seriesIndex === 1) {
            if (index < 2) {
                return '#00F';
            }

            return '#F00';
        }

        if (index < 2) {
            return '#0F0';
        }

        return '#000';
    },
    animationEasingType: AnimationEasingType.None
};

const singleSeriesLinearAnimationProps = { ...singleSeriesBarChartProps, animationEasingType: AnimationEasingType.Linear};
const singleSeriesElasticAnimationProps = { ...singleSeriesBarChartProps, animationEasingType: AnimationEasingType.Elastic};
const singleSeriesInExpoAnimationProps = { ...singleSeriesBarChartProps, animationEasingType: AnimationEasingType.InExpo};

export default {
    component: Chart,
    title: 'Bar Chart',
};

export const singleSeriesNoAnimationBarChart = () => (
    <Container>
        <Chart {...singleSeriesBarChartProps}/>
    </Container>  
);

export const singleSeriesLinearAnimationBarChart = () => (
    <Container>
        <Chart {...singleSeriesLinearAnimationProps}/>
    </Container>  
);

export const singleSeriesElasticAnimationBarChart = () => (
    <Container>
        <Chart {...singleSeriesElasticAnimationProps}/>
    </Container>
);

export const singleSeriesInExpoAnimationBarChart = () => (
    <Container>
        <Chart {...singleSeriesInExpoAnimationProps}/>
    </Container>
);

const multipleSeriesData = [
    {
        seriesName: 'A',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y1: 10,
            },
            {
                x: 1,
                y1: 20,
            },
            {
                x: 2,
                y1: -30,
            },
        ],
    },
    {
        seriesName: 'B',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y1: -10,
            },
            {
                x: 1,
                y1: 20,
            },
            {
                x: 2,
                y1: 30,
            },
        ],
    },
    {
        seriesName: 'C',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y1: 10,
            },
            {
                x: 1,
                y1: -20,
            },
            {
                x: 2,
                y1: 30,
            },
        ],
    },
];

const multipleSeriesBarChartProps = { ...singleSeriesBarChartProps, type: ChartType.StackedBarChart, data: multipleSeriesData };
const multipleSeriesLinearAnimationProps = { ...multipleSeriesBarChartProps, animationEasingType: AnimationEasingType.Linear};
const multipleSeriesElasticAnimationProps = { ...multipleSeriesBarChartProps, animationEasingType: AnimationEasingType.Elastic};
const multipleSeriesInExpoAnimationProps = { ...multipleSeriesBarChartProps, animationEasingType: AnimationEasingType.InExpo};

export const multipleSeriesNoAnimationBarChart = () => (
    <Container>
        <Chart {...multipleSeriesBarChartProps}/>
    </Container>  
);

export const multipleSeriesLinearAnimationBarChart = () => (
    <Container>
        <Chart {...multipleSeriesLinearAnimationProps}/>
    </Container>  
);

export const multipleSeriesElasticAnimationBarChart = () => (
    <Container>
        <Chart {...multipleSeriesElasticAnimationProps}/>
    </Container>
);

export const multipleSeriesInExpoAnimationBarChart = () => (
    <Container>
        <Chart {...multipleSeriesInExpoAnimationProps}/>
    </Container>
);