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

const simpleBarChartProps: BarChartProps = {
    title: 'My first bar chart',
    data: [
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
    ],
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
        if (index < 2) {
            return '#0FF';
        }

        return '#FF0';
    },
    animationEasingType: AnimationEasingType.None
};

const linearAnimationProps = { ...simpleBarChartProps, animationEasingType: AnimationEasingType.Linear};
const elasticAnimationProps = { ...simpleBarChartProps, animationEasingType: AnimationEasingType.Elastic};
const inExpoAnimationProps = { ...simpleBarChartProps, animationEasingType: AnimationEasingType.InExpo};

export default {
    component: BarChart,
    title: 'Bar Chart',
};

export const noAnimationBarChart = () => (
    <Container>
        <BarChart {...simpleBarChartProps}/>
    </Container>  
);

export const linearAnimationBarChart = () => (
    <Container>
        <BarChart {...linearAnimationProps}/>
    </Container>  
);

export const elasticAnimationBarChart = () => (
    <Container>
        <BarChart {...elasticAnimationProps}/>
    </Container>
);

export const inExpoAnimationBarChart = () => (
    <Container>
        <BarChart {...inExpoAnimationProps}/>
    </Container>
);