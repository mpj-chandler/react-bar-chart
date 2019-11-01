import { getTickTextXPosition } from './getTickTextXPosition';
import { AxisTickProps } from '../../../__types__/axisTypes';
import DataType from '../../../enums/DataType';
import { Placement } from '../../../enums/Placement';

describe('getTickTextXPosition', () => {
    describe('When using numeric x-value labels and default alignment', () => {
        const props: AxisTickProps = {
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
                            y1: 10,
                        },
                        {
                            x: 1,
                            y1: 20,
                        },
                        {
                            x: 2,
                            y1: 30,
                        }
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

        it('it renders consistently', () => {
            const xPos = getTickTextXPosition(100, props, DataType.Numeric, { label: '8', index: 7 });

            expect(xPos).toMatchSnapshot();
        });

        it('it throws an error when a non-numeric value is passed', () => {
            expect(() => getTickTextXPosition(100, props, DataType.Numeric, { label: 'anything', index: 7 }))
                .toThrowErrorMatchingSnapshot();
        });
    });

    describe('When using numeric x-value labels and bucket alignment', () => {
        const props: AxisTickProps = {
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
            ],
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            },
            config: {
                tickPlacement: Placement.Bucket,
                zeroIntercept: true,
                margin: 20,
                tickLength: 10,
            },
        };

        it('it renders consistently', () => {
            const xPos = getTickTextXPosition(100, props, DataType.Numeric, { label: '8', index: 7 });

            expect(xPos).toMatchSnapshot();
        });

        it('it throws an error when a non-numeric value is passed', () => {
            expect(() => getTickTextXPosition(100, props, DataType.Numeric, { label: 'anything', index: 7 }))
                .toThrowErrorMatchingSnapshot();
        });
    });

    describe('When using non-null numeric x-value labels and bucket alignment', () => {
        const props: AxisTickProps = {
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
            ],
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            },
            config: {
                tickPlacement: Placement.Bucket,
                zeroIntercept: true,
                margin: 20,
                tickLength: 10,
            },
        };

        it('it renders consistently', () => {
            const xPos = getTickTextXPosition(100, props, DataType.NonNullNumeric, { label: '8', index: 7 });

            expect(xPos).toMatchSnapshot();
        });

        it('it throws an error when a non-numeric value is passed', () => {
            expect(() => getTickTextXPosition(100, props, DataType.Numeric, { label: 'anything', index: 7 }))
                .toThrowErrorMatchingSnapshot();
        });
    });

    describe('When using named x-value labels', () => {
        const props: AxisTickProps = {
            data: [
                {
                    seriesName: 'A',
                    type: {
                        x: DataType.Named,
                        y: DataType.NonNullNumeric,
                    },
                    points: [
                        {
                            x: 'A',
                            y1: 10,
                        },
                        {
                            x: 'B',
                            y1: 20,
                        },
                        {
                            x: 'C',
                            y1: 30,
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

        it('it renders consistently', () => {
            const xPos = getTickTextXPosition(100, props, DataType.Named, { label: 'anything', index: 7 });

            expect(xPos).toMatchSnapshot();
        });
    });

    describe('When using an unknown label data type', () => {
        const props: AxisTickProps = {
            data: [
                {
                    seriesName: 'A',
                    type: {
                        x: DataType.DateIndexed,
                        y: DataType.NonNullNumeric,
                    },
                    points: [
                        {
                            x: 'A',
                            y1: 10,
                        },
                        {
                            x: 'B',
                            y1: 20,
                        },
                        {
                            x: 'C',
                            y1: 30,
                        }
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

        it('it throws an error', () => {
            expect(() => getTickTextXPosition(100, props, DataType.DateIndexed, { label: 'anything', index: 7 }))
                .toThrowErrorMatchingSnapshot();
        });
    });
})