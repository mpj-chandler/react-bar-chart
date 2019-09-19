import React from 'react';
import TestRenderer from 'react-test-renderer';
import BarChart, { BarChartProps } from './BarChart';

jest.mock('./components/XAxis/XAxis');
jest.mock('./components/YAxis/YAxis');
jest.mock('./components/BarPlot/BarPlot.tsx');

describe('Bar Chart', () => {
    const props: BarChartProps = {
        title: 'anything',
        data: [
            {
                seriesName: 'A',
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
        }
    }
    it('it renders consistently', () => {
        const component = TestRenderer.create(<BarChart {...props}/>)

        expect(component.toJSON()).toMatchSnapshot();
    })
})
