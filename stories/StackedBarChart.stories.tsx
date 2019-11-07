import React from 'react';
import Chart, { ChartProps } from '../src/components/Chart/Chart';
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

export default {
    component: Chart,
    title: 'Stacked Bar Chart',
};

const stackedBarDataNumeric = [
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
                y1: 30,
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
                y1: 10,
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
                y1: 20,
            },
            {
                x: 2,
                y1: 30,
            },
        ],
    },
];

const numericStackedBarChartProps: ChartProps = {
    title: 'Stacked Bar Chart',
    data: stackedBarDataNumeric,
    type: ChartType.StackedBarChart,
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
const numericSBCLinearAnimationProps = { ...numericStackedBarChartProps, animationEasingType: AnimationEasingType.Linear};
const numericSBCElasticAnimationProps = { ...numericStackedBarChartProps, animationEasingType: AnimationEasingType.Elastic};
const numericSBCInExpoAnimationProps = { ...numericStackedBarChartProps, animationEasingType: AnimationEasingType.InExpo};

export const numericSBCNoAnimation = () => (
    <Container>
        <Chart {...numericStackedBarChartProps}/>
    </Container>  
);

export const numericSBCLinearAnimation = () => (
    <Container>
        <Chart {...numericSBCLinearAnimationProps}/>
    </Container>  
);

export const numericSBCElasticAnimation = () => (
    <Container>
        <Chart {...numericSBCElasticAnimationProps}/>
    </Container>
);

export const numericSBCInExpoAnimation = () => (
    <Container>
        <Chart {...numericSBCInExpoAnimationProps}/>
    </Container>
);

const namedStackedBarChartData = [
    {
        seriesName: 'A',
        type: {
            x: DataType.Named,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 'Alpha',
                y1: 10,
            },
            {
                x: 'Beta',
                y1: 20,
            },
            {
                x: 'Gamma',
                y1: 30,
            },
        ],
    },
    {
        seriesName: 'B',
        type: {
            x: DataType.Named,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 'Alpha',
                y1: 10,
            },
            {
                x: 'Beta',
                y1: 20,
            },
            {
                x: 'Gamma',
                y1: 30,
            },
        ],
    },
    {
        seriesName: 'C',
        type: {
            x: DataType.Named,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 'Alpha',
                y1: 10,
            },
            {
                x: 'Beta',
                y1: 20,
            },
            {
                x: 'Gamma',
                y1: 30,
            },
        ],
    },
];

const namedStackedBarChartProps: ChartProps = {
    title: 'Stacked Bar Chart',
    data: namedStackedBarChartData,
    type: ChartType.NormalisedStackedBarChart,
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
const namedSBCLinearAnimationProps = { ...namedStackedBarChartProps, animationEasingType: AnimationEasingType.Linear};
const namedSBCElasticAnimationProps = { ...namedStackedBarChartProps, animationEasingType: AnimationEasingType.Elastic};
const namedSBCInExpoAnimationProps = { ...namedStackedBarChartProps, animationEasingType: AnimationEasingType.InExpo};

export const namedSBCNoAnimation = () => (
    <Container>
        <Chart {...namedStackedBarChartProps}/>
    </Container>  
);

export const namedSBCLinearAnimation = () => (
    <Container>
        <Chart {...namedSBCLinearAnimationProps}/>
    </Container>  
);

export const namedSBCElasticAnimation = () => (
    <Container>
        <Chart {...namedSBCElasticAnimationProps}/>
    </Container>
);

export const namedSBCInExpoAnimation = () => (
    <Container>
        <Chart {...namedSBCInExpoAnimationProps}/>
    </Container>
);