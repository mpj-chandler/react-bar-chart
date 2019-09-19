import React from 'react';
import TestRenderer from 'react-test-renderer';
import Bar, { BarProps } from './Bar';
import Placement from '../../enums/Placement';
import DataType from '../../enums/DataType';

jest.useFakeTimers();

describe('Bar', () => {

    let container: HTMLDivElement | null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        if (container !== null) {
            document.body.removeChild(container);
            container = null;
        }
    });

    describe('When dealing with numeric data types', () => {
        describe('When all values on the yAxis are positive', () => {
            const props: BarProps = {
                point: { x: 10, y: 100 },
                index: 1,
                dataType: DataType.NonNullNumeric,
                xRange: { min: 0, max: 100 },
                yRange: { min: 0, max: 200 },
                width: 100,
                fill: 'anything',
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
            };

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
            const props: BarProps = {
                point: { x: 10, y: -50 },
                index: 1,
                dataType: DataType.NonNullNumeric,
                xRange: { min: 0, max: 100 },
                yRange: { min: -100, max: -100 },
                width: 100,
                fill: 'anything',
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
            };

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
            const props: BarProps = {
                index: 1,
                dataType: DataType.NonNullNumeric,
                point: { x: 10, y: -50 },
                xRange: { min: 0, max: 100 },
                yRange: { min: -100, max: 100 },
                width: 100,
                fill: 'anything',
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
            };

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
        describe('When all values on the yAxis are positive', () => {
            const props: BarProps = {
                point: { x: 'Anything', y: 100 },
                index: 1,
                dataType: DataType.Named,
                xRange: { min: 0, max: 100 },
                yRange: { min: 0, max: 200 },
                width: 100,
                fill: 'anything',
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
            };

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
            const props: BarProps = {
                point: { x: 'Anything', y: -50 },
                index: 1,
                dataType: DataType.Named,
                xRange: { min: 0, max: 100 },
                yRange: { min: -100, max: -100 },
                width: 100,
                fill: 'anything',
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
            };

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
            const props: BarProps = {
                index: 1,
                dataType: DataType.Named,
                point: { x: 'Anything', y: -50 },
                xRange: { min: 0, max: 100 },
                yRange: { min: -100, max: 100 },
                width: 100,
                fill: 'anything',
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
            };

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

    describe('When attempting a render with an unknown data type', () => {
        it('it throws an error', () => {
            const props: BarProps = {
                index: 1,
                dataType: DataType.DateIndexed,
                point: { x: 'Anything', y: -50 },
                xRange: { min: 0, max: 100 },
                yRange: { min: -100, max: 100 },
                width: 100,
                fill: 'anything',
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
            };

            expect(() => TestRenderer.create(<Bar {...props} placement={Placement.Aligned}/>)).toThrowError('Error in rendering bar! Unrecognized data type!');
        });
    });
});

function checkSnapshot(props: BarProps) {
    const component = TestRenderer.create(<Bar {...props}/>);
    expect(component.toJSON()).toMatchSnapshot();
}

