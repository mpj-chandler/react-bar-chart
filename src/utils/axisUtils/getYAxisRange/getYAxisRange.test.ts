import { getYAxisRange } from './getYAxisRange';
import { Placement } from '../../../enums/Placement';
import DataType from '../../../enums/DataType';

describe('getYAxisRange', () => {
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

    describe('When not provided with a config object and data containing only y1 values', () => {
        it('it extracts the series maximum and minimum correctly', () => {
            const range = getYAxisRange(data);

            expect(range).toStrictEqual({ max: 30, min: 10 });
        });
    });

    describe('When provided with a config object', () => {
        it('it extracts the series maximum and minimum correctly', () => {
            const range = getYAxisRange(
                data, 
                {
                    zeroIntercept: false,
                    margin: 400,
                    tickPlacement: Placement.Aligned,
                    tickLength: 10,
                });

            expect(range).toStrictEqual({ max: 150, min: 2 });
        });
    });

    describe('When not provided with a config object and data containing y0 and y1 values', () => {
        const stackedData = [
            {
                ...data[0],
                points: [
                    {
                        x: 0,
                        y0: 30,
                        y1: 10,
                    },
                    {
                        x: 1,
                        y0:40,
                        y1: 20,
                    },
                    {
                        x: 2,
                        y0:50,
                        y1: 30,
                    },
                ]
            }
        ]
        it('it extracts the series maximum and minimum correctly', () => {
            const range = getYAxisRange(stackedData);

            expect(range).toStrictEqual({ max: 80, min: 40 });
        });
    });
});
