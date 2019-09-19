import { SeriesData } from '../../../__types__/seriesTypes';
import DataType from '../../../enums/DataType';

export const dataOne: SeriesData[] = [
    {
        seriesName: 'test-series-1',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y: 0.1,
            },
            {
                x: 1,
                y: -3.5,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y: 10.1,
            },
            {
                x: 1,
                y: 3.2,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y: 0.2,
            },
            {
                x: 1,
                y: 6.6,
            },
        ],
    },
];

export const dataTwo: SeriesData[] = [
    {
        seriesName: 'test-series-1',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: -1,
                y: 0.1,
            },
            {
                x: 1,
                y: -3.5,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y: 10.1,
            },
            {
                x: 1,
                y: 3.2,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 0,
                y: 0.2,
            },
            {
                x: 1,
                y: 6.6,
            },
        ],
    },
];

const nullEntry: SeriesData = {
    seriesName: 'test-series-3',
    type: {
        x: DataType.NonNullNumeric,
        y: DataType.NonNullNumeric,
    },
    points: [
        {
            x: null,
            y: 0.2,
        },
        {
            x: 1,
            y: null,
        },
        {
            x: 2,
            y: -1.2,
        },
        {
            x: 3,
            y: 0.6,
        },
    ],
};

export const partiallyNullData: SeriesData[] = [ ...dataOne, nullEntry ];

export const malformedData: SeriesData[] = [
    {
        seriesName: 'test-series-3',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: null,
                y: null,
            },
            {
                x: null,
                y: null,
            },
            {
                x: null,
                y: null,
            },
            {
                x: null,
                y: null,
            },
        ],
    },
];

export const dataThree: SeriesData[] = [
    {
        seriesName: 'test-series-1',
        type: {
            x: DataType.Named,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 'A',
                y: 0.1,
            },
            {
                x: 'B',
                y: -3.5,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.Named,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 'A',
                y: 10.1,
            },
            {
                x: 'B',
                y: 3.2,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.Named,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 'A',
                y: 0.2,
            },
            {
                x: 'B',
                y: 6.6,
            },
        ],
    },
];

export const dataFour: SeriesData[] = [
    {
        seriesName: 'test-series-1',
        type: {
            x: DataType.Named,
            y: DataType.Named,
        },
        points: [
            {
                x: 'A',
                y: 0.1,
            },
            {
                x: 'B',
                y: -3.5,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.Named,
            y: DataType.Named,
        },
        points: [
            {
                x: 'A',
                y: 10.1,
            },
            {
                x: 'B',
                y: 3.2,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.Named,
            y: DataType.Named,
        },
        points: [
            {
                x: 'A',
                y: 0.2,
            },
            {
                x: 'B',
                y: 6.6,
            },
        ],
    },
];

export const badData: SeriesData[] = [
    {
        seriesName: 'test-series-1',
        type: {
            x: DataType.Named,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 'A',
                y: 0.1,
            },
            {
                x: 'B',
                y: -3.5,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.NonNullNumeric,
            y: DataType.Named,
        },
        points: [
            {
                x: 'A',
                y: 10.1,
            },
            {
                x: 'B',
                y: 3.2,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.Named,
            y: DataType.NonNullNumeric,
        },
        points: [
            {
                x: 'A',
                y: 0.2,
            },
            {
                x: 'B',
                y: 6.6,
            },
        ],
    },
];

export const unknownData: SeriesData[] = [
    {
        seriesName: 'test-series-1',
        type: {
            x: DataType.DateIndexed,
            y: DataType.DateIndexed,
        },
        points: [
            {
                x: 'A',
                y: 0.1,
            },
            {
                x: 'B',
                y: -3.5,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.DateIndexed,
            y: DataType.DateIndexed,
        },
        points: [
            {
                x: 'A',
                y: 10.1,
            },
            {
                x: 'B',
                y: 3.2,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        type: {
            x: DataType.DateIndexed,
            y: DataType.DateIndexed,
        },
        points: [
            {
                x: 'A',
                y: 0.2,
            },
            {
                x: 'B',
                y: 6.6,
            },
        ],
    },
];
