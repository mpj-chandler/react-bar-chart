import { AxisConfig } from '../../../__types__/axisTypes';
import { Placement } from '../../../enums/Placement';
import { applyAxisConfig } from './applyAxisConfig';

describe('ApplyAxisConfig', () => {
    describe('When the range contains positive values only', () => {
        const range = { min: 50, max: 100};

        describe('when the config requires a zero intercept', () => {
            it('it transforms the config consistently', () => {
                const config: AxisConfig = {
                    zeroIntercept: true,
                    margin: 0,
                    tickPlacement: Placement.Aligned,
                    tickLength: 5,
                };
                const newRange = applyAxisConfig(range, config);

                expect(newRange).toStrictEqual({ max: 100, min: 0 });
            });
        });

        describe('when the config requires a margin to be applied', () => {
            it('it transforms the config consistently', () => {
                const config: AxisConfig = {
                    zeroIntercept: false,
                    margin: 400,
                    tickPlacement: Placement.Aligned,
                    tickLength: 5,
                };
                const newRange = applyAxisConfig(range, config);
                expect(newRange).toStrictEqual({ max: 500, min: 10 });
            });
        });

        describe('when there is no config', () => {
            it('it returns the original range', () => {
                const newRange = applyAxisConfig(range);
                expect(newRange).toStrictEqual({ max: 100, min: 50 });
            });
        });
    });

    describe('When the range contains negative values only', () => {
        const range = { min: -100, max: -50};

        describe('when the config requires a zero intercept', () => {
            it('it transforms the config consistently', () => {
                const config: AxisConfig = {
                    zeroIntercept: true,
                    margin: 0,
                    tickPlacement: Placement.Aligned,
                    tickLength: 5,
                };
                const newRange = applyAxisConfig(range, config);

                expect(newRange).toStrictEqual({ max: 0, min: -100 });
            });
        });

        describe('when the config requires a margin to be applied', () => {
            it('it transforms the config consistently', () => {
                const config: AxisConfig = {
                    zeroIntercept: false,
                    margin: 20,
                    tickPlacement: Placement.Aligned,
                    tickLength: 5,
                };
                const newRange = applyAxisConfig(range, config);
                expect(newRange).toStrictEqual({ max: -40, min: -125 });
            });
        });

        describe('when there is no config', () => {
            it('it returns the original range', () => {
                const newRange = applyAxisConfig(range);
                expect(newRange).toStrictEqual({ max: -50, min: -100 });
            });
        });
    });

    describe('When the range contains positive and negative values', () => {
        const range = { min: -100, max: 50};

        describe('when the config requires a zero intercept', () => {
            it('it transforms the config consistently', () => {
                const config: AxisConfig = {
                    zeroIntercept: true,
                    margin: 0,
                    tickPlacement: Placement.Aligned,
                    tickLength: 5,
                };
                const newRange = applyAxisConfig(range, config);

                expect(newRange).toStrictEqual({ max: 50, min: -100 });
            });
        });

        describe('when the config requires a margin to be applied', () => {
            it('it transforms the config consistently', () => {
                const config: AxisConfig = {
                    zeroIntercept: true,
                    margin: 20,
                    tickPlacement: Placement.Aligned,
                    tickLength: 5,
                };
                const newRange = applyAxisConfig(range, config);
                expect(newRange).toStrictEqual({ max: 60, min: -125 });
            });
        });

        describe('when there is no config', () => {
            it('it returns the original range', () => {
                const newRange = applyAxisConfig(range);
                expect(newRange).toStrictEqual({ max: 50, min: -100 });
            });
        });
    });
});
