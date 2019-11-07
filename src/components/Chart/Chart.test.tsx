import React from 'react';
import TestRenderer from 'react-test-renderer';
import Chart, { ChartProps } from './Chart';
import DataType from '../../enums/DataType';
import AnimationEasingType from '../../enums/AnimationEasingFunction';
import { DataPoint } from '../../__types__/seriesTypes';
import ChartType from '../../enums/ChartType';

jest.mock('../XAxis/XAxis');
jest.mock('../YAxis/YAxis');
jest.mock('../BarPlot/BarPlot.tsx');

describe('Chart', () => {
    const props: ChartProps = {
        title: 'anything',
        type: ChartType.BarChart,
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
                        y1: 10
                    },
                    {
                        x: 1,
                        y1: 20
                    },
                    {
                        x: 2,
                        y1: 30
                    }
                ]
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
                        y1: 10
                    },
                    {
                        x: 1,
                        y1: 20
                    },
                    {
                        x: 2,
                        y1: 30
                    }
                ]
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
                        y1: 10
                    },
                    {
                        x: 1,
                        y1: 20
                    },
                    {
                        x: 2,
                        y1: 30
                    }
                ]
            }
        ],
        padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
        },
        fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => { return '#000 '},
        animationEasingType: AnimationEasingType.None
    };

    Object.values(ChartType).forEach((type: ChartType) => {
        it('it renders consistently', () => {
            const adjProps = { ...props, type };
            const component = TestRenderer.create(<Chart {...adjProps}/>)
    
            expect(component.toJSON()).toMatchSnapshot();
        });
    });
    
})
