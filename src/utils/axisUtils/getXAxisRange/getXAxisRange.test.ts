import { getXAxisRange } from './getXAxisRange';
import { Placement } from '../../../enums/Placement';
import DataType from '../../../enums/DataType';

describe('getXAxisRange', () => {
    describe('when using non-null numeric data', () => {
        const data = [
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
        ];

        describe('When not provided with a config object', () => {
            it('it extracts the series maximum and minimum correctly', () => {
                const range = getXAxisRange(data);

                expect(range).toStrictEqual({ max: 2, min: 0 });
            });
        });

        describe('When provided with a config object', () => {
            it('it extracts the series maximum and minimum correctly', () => {
                const range = getXAxisRange(
                    data,
                    {
                        zeroIntercept: false,
                        margin: 400,
                        tickPlacement: Placement.Aligned,
                        tickLength: 10,
                    });

                expect(range).toStrictEqual({ max: 10, min: 0 });
            });
        });
    });

    describe('when using numeric data', () => {
        const data = [
            {
                seriesName: 'A',
                type: {
                    x: DataType.Numeric,
                    y: DataType.Numeric,
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
        ];

        describe('When not provided with a config object', () => {
            it('it extracts the series maximum and minimum correctly', () => {
                const range = getXAxisRange(data);

                expect(range).toStrictEqual({ max: 2, min: 0 });
            });
        });

        describe('When provided with a config object', () => {
            it('it extracts the series maximum and minimum correctly', () => {
                const range = getXAxisRange(
                    data,
                    {
                        zeroIntercept: false,
                        margin: 400,
                        tickPlacement: Placement.Bucket,
                        tickLength: 10,
                    });

                expect(range).toStrictEqual({ max: 13.333333333333332, min: 0 });
            });
        });
    });

    describe('when using named data', () => {
        const data = [
            {
                seriesName: 'A',
                type: {
                    x: DataType.Named,
                    y: DataType.Numeric,
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
        ];

        describe('When not provided with a config object', () => {
            it('it extracts the series maximum and minimum correctly', () => {
                const range = getXAxisRange(data);

                expect(range).toStrictEqual({ max: 2, min: 0 });
            });
        });

        describe('When provided with a bucket config object', () => {
            it('it extracts the series maximum and minimum correctly', () => {
                const range = getXAxisRange(
                    data,
                    {
                        zeroIntercept: false,
                        margin: 400,
                        tickPlacement: Placement.Bucket,
                        tickLength: 10,
                    });

                expect(range).toStrictEqual({ max: 13.333333333333332, min: 0 });
            });
        });

        describe('When provided with an aligned config object', () => {
            it('it extracts the series maximum and minimum correctly', () => {
                const range = getXAxisRange(
                    data,
                    {
                        zeroIntercept: false,
                        margin: 400,
                        tickPlacement: Placement.Aligned,
                        tickLength: 10,
                    });

                expect(range).toStrictEqual({ max: 10, min: 0 });
            });
        });

        describe('When provided with empty data', () => {
            it('it throws an error', () => {
                const emptyData = [
                    {
                        seriesName: 'A',
                        type: {
                            x: DataType.Named,
                            y: DataType.Numeric,
                        },
                        points: [],
                    },
                ];
                expect(() => getXAxisRange(emptyData)).toThrowErrorMatchingSnapshot();
            });
        });
    });

    describe('when using an unknown data type', () => {
        const data = [
            {
                seriesName: 'A',
                type: {
                    x: DataType.DateIndexed,
                    y: DataType.Numeric,
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
        ];

        it('it throws an error', () => {
            expect(() => getXAxisRange(data)).toThrowErrorMatchingSnapshot();
        });
    });
});
