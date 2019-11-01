import React from 'react';
import TestRenderer from 'react-test-renderer';
import Bar, { BarProps } from './StackedBar';
import { Placement } from '../../enums/Placement';
import DataType from '../../enums/DataType';
import AnimationEasingType from '../../enums/AnimationEasingFunction';
import { DataPoint } from '../../__types__/seriesTypes';

jest.useFakeTimers();

describe('Bar', () => {
    describe('When dealing with numeric data types', () => {
        const props: BarProps = {
            point: { x: 10, y1: 100 },
            index: 1,
            dataType: DataType.NonNullNumeric,
            xRange: { min: 0, max: 100 },
            yRange: { min: 0, max: 200 },
            width: 100,
            stroke: 'anything',
            padding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
            },
            placement: Placement.Aligned,
            numBars: 3,
            seriesIndex: 0,
            numSeries: 1,
            fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => { return '#000 '},
            animationEasingType: AnimationEasingType.None
        };

        describe('When all values on the yAxis are positive', () => {
            it('it renders consistently with defaults', () => {
                checkSnapshot(props);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...props, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...props, placement: Placement.Bucket });
            });
        });

        describe('When all values on the yAxis are negative', () => {
            const newProps: BarProps = { ...props, yRange: { min: -100, max: -100 } };

            it('it renders consistently with defaults', () => {
                checkSnapshot(newProps);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...newProps, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...newProps, placement: Placement.Bucket });
            });
        });


        describe('When the yAxis spans positive and negative values', () => {
            const newProps: BarProps = { ...props, yRange: { min: -100, max: 100 } };

            it('it renders consistently with defaults', () => {
                checkSnapshot(props);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...props, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...props, placement: Placement.Bucket });
            });
        });
    });

    describe('When dealing with named data types', () => {
        const props: BarProps = {
            point: { x: 'Anything', y1: 100 },
            index: 1,
            dataType: DataType.Named,
            xRange: { min: 0, max: 100 },
            yRange: { min: 0, max: 200 },
            width: 100,
            stroke: 'anything',
            padding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
            },
            placement: Placement.Aligned,
            numBars: 3,
            seriesIndex: 0,
            numSeries: 1,
            fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => { return '#000 '},
            animationEasingType: AnimationEasingType.None
        };

        describe('When all values on the yAxis are positive', () => {

            it('it renders consistently with defaults', () => {
                checkSnapshot(props);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...props, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...props, placement: Placement.Bucket });
            });
        });

        describe('When all values on the yAxis are negative', () => {
            const newProps: BarProps = { ...props, yRange: { min: -100, max: -100 } };

            it('it renders consistently with defaults', () => {
                checkSnapshot(props);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...newProps, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...newProps, placement: Placement.Bucket });
            });
        });


        describe('When the yAxis spans positive and negative values', () => {
            const newProps: BarProps = { ...props, yRange: { min: -100, max: 100 } };

            it('it renders consistently with defaults', () => {
                checkSnapshot(props);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...props, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...props, placement: Placement.Bucket });
            });
        });
    });

    describe('When dealing with numeric data types', () => {
        const props: BarProps = {
            point: { x: 10, y1: 100 },
            index: 1,
            dataType: DataType.NonNullNumeric,
            xRange: { min: 0, max: 100 },
            yRange: { min: 0, max: 200 },
            width: 100,
            stroke: 'anything',
            padding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
            },
            placement: Placement.Aligned,
            numBars: 3,
            seriesIndex: 0,
            numSeries: 1,
            fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => { return '#000 '},
            animationEasingType: AnimationEasingType.None
        };

        describe('When all values on the yAxis are positive', () => {
            
            it('it renders consistently with defaults', () => {
                checkSnapshot(props);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...props, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...props, placement: Placement.Bucket });
            });
        });

        describe('When all values on the yAxis are negative', () => {
            const newProps: BarProps = { ...props, yRange: { min: -100, max: -100 } };

            it('it renders consistently with defaults', () => {
                checkSnapshot(props);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...props, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...props, placement: Placement.Bucket });
            });
        });


        describe('When the yAxis spans positive and negative values', () => {
            const newProps: BarProps = { ...props, yRange: { min: -100, max: 100 } };

            it('it renders consistently with defaults', () => {
                checkSnapshot(props);
            });

            it('it renders consistently with Placement set to Aligned', () => {
                checkSnapshot({ ...props, placement: Placement.Aligned });
            });

            it('it renders consistently with Placement set to Bucket', () => {
                checkSnapshot({ ...props, placement: Placement.Bucket });
            });
        });
    });

    describe('When dealing with an animated graph', () => {
        const props: BarProps = {
            point: { x: 'Anything', y1: 100 },
            index: 1,
            dataType: DataType.Named,
            xRange: { min: 0, max: 100 },
            yRange: { min: 0, max: 200 },
            width: 100,
            stroke: 'anything',
            padding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
            },
            placement: Placement.Aligned,
            numBars: 3,
            seriesIndex: 0,
            numSeries: 1,
            fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => { return '#000 '},
            animationEasingType: AnimationEasingType.Linear
        };

        it('it renders consistently', () => {
            checkSnapshot(props);
        });
    });


    describe('When attempting a render with an unknown data type', () => {
        it('it throws an error', () => {
            const props: BarProps = {
                index: 1,
                dataType: DataType.DateIndexed,
                point: { x: 'Anything', y1: -50 },
                xRange: { min: 0, max: 100 },
                yRange: { min: -100, max: 100 },
                width: 100,
                stroke: 'anything',
                padding: {
                    top: 10,
                    left: 10,
                    right: 10,
                    bottom: 10,
                },
                placement: Placement.Aligned,
                numBars: 3,
                seriesIndex: 0,
                numSeries: 1,
                fillFormatter: (seriesIndex: number, dataPoint: DataPoint, index: number) => { return '#000 '},
                animationEasingType: AnimationEasingType.None
            };

            expect(() => TestRenderer.create(<Bar {...props} placement={Placement.Aligned}/>)).toThrowError('Error in rendering bar! Unrecognized data type!');
        });
    });
});

function checkSnapshot(props: BarProps) {
    const component = TestRenderer.create(<Bar {...props}/>);
    expect(component.toJSON()).toMatchSnapshot();
}

