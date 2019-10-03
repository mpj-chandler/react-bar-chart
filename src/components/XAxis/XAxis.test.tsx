import React from 'react';
import TestRenderer from 'react-test-renderer';
import XAxis from './XAxis';
import { Placement } from '../../enums/Placement';
import DataType from '../../enums/DataType';
import { AxisProps, AxisConfig } from '../../__types__/axisTypes';

jest.mock('../AxisTickLabel/AxisTickLabel');

describe('XAxis', () => {
    describe('When XAxis values are all positive', () => {
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
                        },
                    ],
                },
            ],
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            },
        };

        const inlineConfig: AxisConfig = {
            zeroIntercept: false,
            margin: 0,
            tickPlacement: Placement.Aligned,
            tickLength: 10,
        };

        const bucketConfig: AxisConfig = { ...inlineConfig, tickPlacement: Placement.Bucket };

        it('it renders consistently with default tick placement', () => {
            const component = TestRenderer.create(<XAxis {...props}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with explicit inline tick placement', () => {

            const component = TestRenderer.create(<XAxis {...props} config={inlineConfig}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with explicit bucket tick placement', () => {

            const component = TestRenderer.create(<XAxis {...props} config={bucketConfig}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });
    });

    describe('When XAxis values are all negative', () => {
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
                            x: -3,
                            y: 10,
                        },
                        {
                            x: -2,
                            y: 20,
                        },
                        {
                            x: -1,
                            y: 30,
                        },
                    ],
                },
            ],
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            },
        };

        const inlineConfig: AxisConfig = {
            zeroIntercept: false,
            margin: 0,
            tickPlacement: Placement.Aligned,
            tickLength: 10,
        };

        const bucketConfig: AxisConfig = { ...inlineConfig, tickPlacement: Placement.Bucket };

        it('it renders consistently with default tick placement', () => {
            const component = TestRenderer.create(<XAxis {...props}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with explicit inline tick placement', () => {

            const component = TestRenderer.create(<XAxis {...props} config={inlineConfig}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with explicit bucket tick placement', () => {

            const component = TestRenderer.create(<XAxis {...props} config={bucketConfig}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });
    });

    describe('When XAxis values span negative and positive values', () => {
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
                            x: -2,
                            y: 10,
                        },
                        {
                            x: -1,
                            y: 20,
                        },
                        {
                            x: 2,
                            y: 30,
                        },
                    ],
                },
            ],
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            },
        };

        const inlineConfig: AxisConfig = {
            zeroIntercept: false,
            margin: 0,
            tickPlacement: Placement.Aligned,
            tickLength: 10,
        };

        const bucketConfig: AxisConfig = { ...inlineConfig, tickPlacement: Placement.Bucket };

        it('it renders consistently with default tick placement', () => {
            const component = TestRenderer.create(<XAxis {...props}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with explicit inline tick placement', () => {

            const component = TestRenderer.create(<XAxis {...props} config={inlineConfig}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with explicit bucket tick placement', () => {

            const component = TestRenderer.create(<XAxis {...props} config={bucketConfig}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });
    });

    describe('When XAxis is rendered above the chart', () => {
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
                            x: 1,
                            y: 0,
                        },
                        {
                            x: 2,
                            y: -10,
                        },
                        {
                            x: 3,
                            y: -20,
                        },
                    ],
                },
            ],
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            },
        };

        const inlineConfig: AxisConfig = {
            zeroIntercept: false,
            margin: 0,
            tickPlacement: Placement.Aligned,
            tickLength: 10,
        };

        const bucketConfig: AxisConfig = { ...inlineConfig, tickPlacement: Placement.Bucket };

        it('it renders consistently with default tick placement', () => {
            const component = TestRenderer.create(<XAxis {...props}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with explicit inline tick placement', () => {

            const component = TestRenderer.create(<XAxis {...props} config={inlineConfig}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with explicit bucket tick placement', () => {

            const component = TestRenderer.create(<XAxis {...props} config={bucketConfig}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });
    });
});
