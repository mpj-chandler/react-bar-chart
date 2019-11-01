import { SeriesData } from "../../../__types__/seriesTypes";
import DataType from "../../../enums/DataType";

export const data: SeriesData[] = [
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
            {
                x: 2,
                y1: 10.9,
            },
            {
                x: 3,
                y1: -4.7,
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
            {
                x: 2,
                y1: -15.9,
            },
            {
                x: 3,
                y1: 0.0,
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
            {
                x: 2,
                y1: -1.2,
            },
            {
                x: 3,
                y1: 0.6,
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

export const partiallyNullData: SeriesData[] = [ ...data, nullEntry ];

export const malformedData: SeriesData[] = [
    {
        seriesName: 'test-series-1',
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

