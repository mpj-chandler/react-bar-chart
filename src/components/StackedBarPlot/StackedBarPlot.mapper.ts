import { SeriesData, NamedDataPoint, NumericDataPoint, NonNullNumericDataPoint, DateIndexedDataPoint } from '../../__types__/seriesTypes';

function stackSeries(input: SeriesData[]): SeriesData[] {
    if (input.length === 1) {
        return input;
    }

    const output: SeriesData[] = [];
    
    for (let i = 0; i < input.length; i++ ) {
        let points = undefined;
        
        if (i === 0) {
            points = input[0].points.map((point: NamedDataPoint | NumericDataPoint | NonNullNumericDataPoint | DateIndexedDataPoint) => {
                return { ...point, y0: point.y0 || 0 };
            })
        } else {
            points = input[i].points.map((point: NamedDataPoint | NumericDataPoint | NonNullNumericDataPoint | DateIndexedDataPoint, index: number) => {
                const previousY0 = output[i - 1].points[index].y0 || 0;
                const previousY1 = input[i - 1].points[index].y1 || 0;
                return { ...point, y0: previousY0 + previousY1 };
            });
        }

        output.push({ ...input[i], points });
    }

    return output;
}

export default stackSeries;