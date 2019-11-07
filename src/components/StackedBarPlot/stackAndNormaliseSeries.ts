import stackSeries from './stackSeries';
import { NumericDataPoint, NonNullNumericDataPoint, NamedDataPoint, DateIndexedDataPoint, SeriesData } from '../../__types__/seriesTypes';

function stackAndNormaliseSeries(input: SeriesData[]): SeriesData[] {
    const stackedData = stackSeries(input);

    const lastSeriesPoints = stackedData[stackedData.length - 1].points;
    const totals: number[] = lastSeriesPoints.map((point: NumericDataPoint | NonNullNumericDataPoint | NamedDataPoint | DateIndexedDataPoint) => {
        return (point.y0 || 0) + (point.y1);
    })

    const normalisedData: SeriesData[] = [];

    stackedData.forEach((series: SeriesData) => {
        const normalisedPoints: Array<NumericDataPoint | NonNullNumericDataPoint | NamedDataPoint | DateIndexedDataPoint> = series.points.map((point: NumericDataPoint | NonNullNumericDataPoint | NamedDataPoint | DateIndexedDataPoint, index: number) => {
            return { ...point, y0: 100 * (point.y0 || 0) / totals[index], y1: 100 * point.y1 / totals[index] }; 
        })

        const normalisedSeries: SeriesData = { ...series, points: normalisedPoints };

        normalisedData.push(normalisedSeries as unknown as SeriesData);
    });

    return normalisedData;
}

export default stackAndNormaliseSeries;