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
                y1: 0.1,
            },
            {
                x: 1,
                y1: -3.5,
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
                y1: 10.1,
            },
            {
                x: 1,
                y1: 3.2,
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
                y1: 0.2,
            },
            {
                x: 1,
                y1: 6.6,
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
                y1: 0.1,
            },
            {
                x: 1,
                y1: -3.5,
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
                y1: 10.1,
            },
            {
                x: 1,
                y1: 3.2,
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
                y1: 0.2,
            },
            {
                x: 1,
                y1: 6.6,
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
            y1: 0.2,
        },
        {
            x: 1,
            y1: null,
        },
        {
            x: 2,
            y1: -1.2,
        },
        {
            x: 3,
            y1: 0.6,
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
                y1: null,
            },
            {
                x: null,
                y1: null,
            },
            {
                x: null,
                y1: null,
            },
            {
                x: null,
                y1: null,
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
                y1: 0.1,
            },
            {
                x: 'B',
                y1: -3.5,
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
                y1: 10.1,
            },
            {
                x: 'B',
                y1: 3.2,
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
                y1: 0.2,
            },
            {
                x: 'B',
                y1: 6.6,
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
                y1: 0.1,
            },
            {
                x: 'B',
                y1: -3.5,
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
                y1: 10.1,
            },
            {
                x: 'B',
                y1: 3.2,
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
                y1: 0.2,
            },
            {
                x: 'B',
                y1: 6.6,
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
                y1: 0.1,
            },
            {
                x: 'B',
                y1: -3.5,
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
                y1: 10.1,
            },
            {
                x: 'B',
                y1: 3.2,
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
                y1: 0.2,
            },
            {
                x: 'B',
                y1: 6.6,
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
                y1: 0.1,
            },
            {
                x: 'B',
                y1: -3.5,
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
                y1: 10.1,
            },
            {
                x: 'B',
                y1: 3.2,
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
                y1: 0.2,
            },
            {
                x: 'B',
                y1: 6.6,
            },
        ],
    },
];
