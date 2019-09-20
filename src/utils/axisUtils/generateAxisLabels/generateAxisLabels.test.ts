import Axis from '../../../enums/Axis';
import { dataOne, dataTwo, dataThree, dataFour, badData, unknownData } from './generateAxisLabels.testdata';
import generateAxisLabels from './generateAxisLabels';

describe('generateAxisLabels', () => {
    it('it generates appropriate XAxis tick labels for a given range of data', () => {
        expect(generateAxisLabels(dataOne, Axis.XAxis)).toMatchSnapshot();

        expect(generateAxisLabels(dataTwo, Axis.XAxis)).toMatchSnapshot();

        expect(generateAxisLabels(dataThree, Axis.XAxis)).toMatchSnapshot();
    });

    it('it generates appropriate YAxis tick labels for a given range of data', () => {
        expect(generateAxisLabels(dataOne, Axis.YAxis)).toMatchSnapshot();

        expect(generateAxisLabels(dataTwo, Axis.YAxis)).toMatchSnapshot();

        expect(generateAxisLabels(dataThree, Axis.YAxis)).toMatchSnapshot();
    });

    it('it throws an error when data types are inconsistent across the data', () => {
        expect(() => generateAxisLabels(badData, Axis.XAxis)).toThrowErrorMatchingSnapshot();
        expect(() => generateAxisLabels(badData, Axis.YAxis)).toThrowErrorMatchingSnapshot();
    });

    it('it throws an error when data types are unknown', () => {
        expect(() => generateAxisLabels(unknownData, Axis.XAxis)).toThrowErrorMatchingSnapshot();
        expect(() => generateAxisLabels(unknownData, Axis.YAxis)).toThrowErrorMatchingSnapshot();
    });

    it('it throws an error when passed a y axis with named buckets', () => {
        expect(() => generateAxisLabels(dataFour, Axis.YAxis)).toThrowErrorMatchingSnapshot();
        expect(generateAxisLabels(dataFour, Axis.XAxis)).toMatchSnapshot();
    });
});




