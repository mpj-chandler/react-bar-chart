import React from 'react';
import TestRenderer from 'react-test-renderer';
import BarChart, { BarChartProps } from './BarChart';
import DataType from '../../enums/DataType';
import AnimationEasingType from '../../enums/AnimationEasingFunction';

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
                        y: 10
                    },
                    {
                        x: 1,
                        y: 20
                    },
                    {
                        x: 2,
                        y: 30
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
        animationEasingType: AnimationEasingType.None
    }
    it('it renders consistently', () => {
        const component = TestRenderer.create(<BarChart {...props}/>)

        expect(component.toJSON()).toMatchSnapshot();
    })
})
