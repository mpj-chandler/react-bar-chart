import React from 'react';
import TestRenderer from 'react-test-renderer';
import YAxis from './YAxis';
import Placement from '../../enums/Placement';
import { AxisProps, AxisConfig } from '../../__types__/axisTypes';
import DataType from '../../enums/DataType';


jest.mock('../AxisTickLabel/AxisTickLabel');

describe('YAxis', () => {
    const props: AxisProps = {
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
                        y: 10,
                    },
                    {
                        x: 1,
                        y: 20,
                    },
                    {
                        x: 2,
                        y: 30,
                    }
                ]
            }
        ],
        padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        }
    };

    const config: AxisConfig = {
        zeroIntercept: true,
        margin: 20,
        tickPlacement: Placement.Aligned,
        tickLength: 10,
    }

    it('it renders consistently', () => {
        const component = TestRenderer.create(<YAxis {...props}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('it renders consistently with an explicit config', () => {
        const component = TestRenderer.create(<YAxis {...props} config={config}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });
})