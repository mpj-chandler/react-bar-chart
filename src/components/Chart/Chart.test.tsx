import React from 'react';
import TestRenderer from 'react-test-renderer';
import Chart, { BarChartProps } from './Chart';
import DataType from '../../enums/DataType';
import AnimationEasingType from '../../enums/AnimationEasingFunction';
import { DataPoint } from '../../__types__/seriesTypes';

jest.mock('../XAxis/XAxis');
jest.mock('../YAxis/YAxis');
jest.mock('../BarPlot/BarPlot.tsx');

describe('Bar Chart', () => {
    const props: BarChartProps = {
        title: 'anything',
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
    }
    it('it renders consistently', () => {
        const component = TestRenderer.create(<Chart {...props}/>)

        expect(component.toJSON()).toMatchSnapshot();
    })
})
