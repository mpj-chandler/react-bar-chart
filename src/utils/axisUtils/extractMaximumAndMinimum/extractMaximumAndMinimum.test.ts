import extractMaximumAndMinimum from './extractMaximumAndMinimum';
import Axis from '../../../enums/Axis';
import { data, partiallyNullData, malformedData } from './extractMaximumAndMinimum.testdata';

describe('extractMaximumAndMinimum', () => {

    describe('When all values are non-null', () => {
        it('it extracts the maximum and minimum Y values from the data set correctly', () => {
            expect(extractMaximumAndMinimum(data, Axis.YAxis)).toStrictEqual({ min: -15.9, max: 10.9 });
        });

        it('it extracts the maximum and minimum X values from the data set correctly', () => {
            expect(extractMaximumAndMinimum(data, Axis.XAxis)).toStrictEqual({ min: 0, max: 3 });
        });
    });

    describe('When the data set contains null values', () => {
        it('it extracts the maximum and minimum Y values from the data set correctly', () => {
            expect(extractMaximumAndMinimum(partiallyNullData, Axis.YAxis)).toStrictEqual({ min: -15.9, max: 10.9 });
        });

        it('it extracts the maximum and minimum X values from the data set correctly', () => {
            expect(extractMaximumAndMinimum(partiallyNullData, Axis.XAxis)).toStrictEqual({ min: 0, max: 3 });
        });
    });

    describe('When the data is mal-formed', () => {
        it('it throws an error when computing the XAxis maxima and minima', () => {
            expect(() => extractMaximumAndMinimum(malformedData, Axis.XAxis)).toThrowError(`Error! Unable to extract maximum and minimum for: ${malformedData}. Please check it has the correct format.`);
        });

        it('it throws an error when computing the YAxis maxima and minima', () => {
            expect(() => extractMaximumAndMinimum(malformedData, Axis.XAxis)).toThrowError(`Error! Unable to extract maximum and minimum for: ${malformedData}. Please check it has the correct format.`);
        });
    });
});
