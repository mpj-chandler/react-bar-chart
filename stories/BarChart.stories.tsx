import React from 'react';
import BarChart, { BarChartProps } from '../src/components/BarChart/BarChart';
import { Placement } from '../src/enums/Placement';
import DataType from '../src/enums/DataType';
import AnimationEasingType from '../src/enums/AnimationEasingFunction';
import { DataPoint } from '../src/__types__/seriesTypes';

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
                y: 10,
            },
            {
                x: 1,
                y: 20,
            },
            {
                x: 2,
                y: -30,
            },
        ],
    },
];

const singleSeriesBarChartProps: BarChartProps = {
    title: 'My first bar chart',
    data: singleSeriesData,
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
    component: BarChart,
    title: 'Bar Chart',
};

export const singleSeriesNoAnimationBarChart = () => (
    <Container>
        <BarChart {...singleSeriesBarChartProps}/>
    </Container>  
);

export const singleSeriesLinearAnimationBarChart = () => (
    <Container>
        <BarChart {...singleSeriesLinearAnimationProps}/>
    </Container>  
);

export const singleSeriesElasticAnimationBarChart = () => (
    <Container>
        <BarChart {...singleSeriesElasticAnimationProps}/>
    </Container>
);

export const singleSeriesInExpoAnimationBarChart = () => (
    <Container>
        <BarChart {...singleSeriesInExpoAnimationProps}/>
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
                y: 10,
            },
            {
                x: 1,
                y: 20,
            },
            {
                x: 2,
                y: -30,
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
                y: -10,
            },
            {
                x: 1,
                y: 20,
            },
            {
                x: 2,
                y: 30,
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
                y: 10,
            },
            {
                x: 1,
                y: -20,
            },
            {
                x: 2,
                y: 30,
            },
        ],
    },
];

const multipleSeriesBarChartProps = { ...singleSeriesBarChartProps, data: multipleSeriesData };
const multipleSeriesLinearAnimationProps = { ...multipleSeriesBarChartProps, animationEasingType: AnimationEasingType.Linear};
const multipleSeriesElasticAnimationProps = { ...multipleSeriesBarChartProps, animationEasingType: AnimationEasingType.Elastic};
const multipleSeriesInExpoAnimationProps = { ...multipleSeriesBarChartProps, animationEasingType: AnimationEasingType.InExpo};

export const multipleSeriesNoAnimationBarChart = () => (
    <Container>
        <BarChart {...multipleSeriesBarChartProps}/>
    </Container>  
);

export const multipleSeriesLinearAnimationBarChart = () => (
    <Container>
        <BarChart {...multipleSeriesLinearAnimationProps}/>
    </Container>  
);

export const multipleSeriesElasticAnimationBarChart = () => (
    <Container>
        <BarChart {...multipleSeriesElasticAnimationProps}/>
    </Container>
);

export const multipleSeriesInExpoAnimationBarChart = () => (
    <Container>
        <BarChart {...multipleSeriesInExpoAnimationProps}/>
    </Container>
);