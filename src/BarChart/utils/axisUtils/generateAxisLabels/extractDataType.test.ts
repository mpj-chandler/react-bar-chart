import { dataOne, dataTwo, dataThree, dataFour, badData } from './generateAxisLabels.testdata';
import { extractDataType } from './extractDataType';
import Axis from '../../../enums/Axis';
import { SeriesData } from '../../../__types__/seriesTypes';

describe('extractDataType', () => {

    [dataOne, dataTwo, dataThree, dataFour].forEach((data: SeriesData[], index) => {
        it(`it extracts the correct data type for data-${index + 1}`, () => {
            expect(extractDataType(dataOne, Axis.XAxis)).toMatchSnapshot();
            expect(extractDataType(dataOne, Axis.YAxis)).toMatchSnapshot();
        });
    });

    it('it throws an error when no data is available', () => {
        expect(() => extractDataType([], Axis.XAxis)).toThrowErrorMatchingSnapshot();
        expect(() => extractDataType([], Axis.YAxis)).toThrowErrorMatchingSnapshot();
    });

    it('it throws an error with inconsistent data', () => {
        expect(() => extractDataType(badData, Axis.XAxis)).toThrowErrorMatchingSnapshot();
        expect(() => extractDataType(badData, Axis.YAxis)).toThrowErrorMatchingSnapshot();
    });
});
