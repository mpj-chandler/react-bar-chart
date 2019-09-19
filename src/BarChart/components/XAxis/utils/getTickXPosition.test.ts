import { getTickXPosition } from './getTickXPosition';
import { AxisTickProps } from '../../../__types__/axisTypes';
import DataType from '../../../enums/DataType';
import Placement from '../../../enums/Placement';

describe('getTickXPosition', () => {
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
            const xPos = getTickXPosition(props, DataType.Numeric, { label: '8', index: 7 });

            expect(xPos).toMatchSnapshot();
        });

        it('it throws an error when a non-numeric value is passed', () => {
            expect(() => getTickXPosition(props, DataType.Numeric, { label: 'anything', index: 7 }))
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
            config: {
                tickPlacement: Placement.Bucket,
                zeroIntercept: true,
                margin: 20,
                tickLength: 10,
            },
        };

        it('it renders consistently', () => {
            const xPos = getTickXPosition(props, DataType.Numeric, { label: '8', index: 7 });

            expect(xPos).toMatchSnapshot();
        });

        it('it throws an error when a non-numeric value is passed', () => {
            expect(() => getTickXPosition(props, DataType.Numeric, { label: 'anything', index: 7 }))
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
            config: {
                tickPlacement: Placement.Bucket,
                zeroIntercept: true,
                margin: 20,
                tickLength: 10,
            },
        };

        it('it renders consistently', () => {
            const xPos = getTickXPosition(props, DataType.NonNullNumeric, { label: '8', index: 7 });

            expect(xPos).toMatchSnapshot();
        });

        it('it throws an error when a non-numeric value is passed', () => {
            expect(() => getTickXPosition(props, DataType.Numeric, { label: 'anything', index: 7 }))
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
                            y: 10,
                        },
                        {
                            x: 'B',
                            y: 20,
                        },
                        {
                            x: 'C',
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

        it('it renders consistently', () => {
            const xPos = getTickXPosition(props, DataType.Named, { label: 'anything', index: 7 });

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
                            y: 10,
                        },
                        {
                            x: 'B',
                            y: 20,
                        },
                        {
                            x: 'C',
                            y: 30,
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
            expect(() => getTickXPosition(props, DataType.DateIndexed, { label: 'anything', index: 7 }))
                .toThrowErrorMatchingSnapshot();
        });
    });
});

