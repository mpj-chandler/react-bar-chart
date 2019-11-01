import { DataType } from "../..";
import { SeriesData, DataPoint, NamedDataPoint, NumericDataPoint, NonNullNumericDataPoint, DateIndexedDataPoint } from '../../__types__/seriesTypes';
import stackSeries from './StackedBarPlot.mapper';

describe('the stacked bar plot mapper', () => {
    describe('when provided with a data source containing only one series', () => {
        const singleSeriesData: SeriesData[] = [
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
                        y1: -30,
                    },
                ],
            }
        ];

        it('it returns the original series', () => {
            expect(stackSeries(singleSeriesData)).toStrictEqual(singleSeriesData);
        });
    });

    describe('when provided with a data source containing multiple series', () => {
        const multipleSeriesData: SeriesData[] = [
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
            {
                seriesName: 'B',
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
            {
                seriesName: 'C',
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
        ];

        const expected: SeriesData[] = [
                {
                    seriesName: 'A',
                    type: {
                        x: DataType.NonNullNumeric,
                        y: DataType.NonNullNumeric,
                    },
                    points: [
                        {
                            x: 0,
                            y0: 0,
                            y1: 10,
                        },
                        {
                            x: 1,
                            y0: 0,
                            y1: 20,
                        },
                        {
                            x: 2,
                            y0: 0,
                            y1: 30,
                        },
                    ],
                },
                {
                    seriesName: 'B',
                    type: {
                        x: DataType.NonNullNumeric,
                        y: DataType.NonNullNumeric,
                    },
                    points: [
                        {
                            x: 0,
                            y0: 10,
                            y1: 10,
                        },
                        {
                            x: 1,
                            y0: 20,
                            y1: 20,
                        },
                        {
                            x: 2,
                            y0: 30,
                            y1: 30,
                        },
                    ],
                },
                {
                    seriesName: 'C',
                    type: {
                        x: DataType.NonNullNumeric,
                        y: DataType.NonNullNumeric,
                    },
                    points: [
                        {
                            x: 0,
                            y0: 20,
                            y1: 10
                        },
                        {
                            x: 1,
                            y0: 40,
                            y1: 20,
                        },
                        {
                            x: 2,
                            y0: 60,
                            y1: 30,
                        },
                    ],
                },
        ]

        it('correctly aggregates the series', () => {
            expect(stackSeries(multipleSeriesData)).toStrictEqual(expected);
        });
    });
});