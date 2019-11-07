import React from 'react';
import StackedBarPlot, { StackedBarPlotProps } from './StackedBarPlot';
import { AxisConfig } from '../../__types__/axisTypes';
import { Placement, DataType } from '../..';
import TestRenderer from 'react-test-renderer';

jest.mock('../StackedBar/StackedBar');

describe('StackedBarPlot', () => {
    describe('When provided with valid data', () => {
        Object.values(Placement).forEach((placement: Placement) => {
            it('it renders consistently', () => {
                const inlineConfig: AxisConfig = {
                    zeroIntercept: false,
                    margin: 0,
                    tickPlacement: Placement.Aligned,
                    tickLength: 100,
                };
            
                const bucketConfig: AxisConfig = { ...inlineConfig, tickPlacement: Placement.Bucket };
            
                const props: StackedBarPlotProps = {
                    data: [
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
                                }
                            ],
                        },
                        {
                            seriesName: 'B',
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
                                }
                            ],
                        },
                        {
                            seriesName: 'C',
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
                                }
                            ],
                        }
                    ],
                    padding: {
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10,
                    },
                    xAxisConfig: {
                        zeroIntercept: true,
                        tickPlacement: placement,
                        margin: 10,
                        tickLength: 10
                    }
                };
        
                const component = TestRenderer.create(<StackedBarPlot {...props}/>);
        
                expect(component.toJSON()).toMatchSnapshot();
            });
        });
    });

    describe('When provided with patchy data', () => {
        Object.values(Placement).forEach((placement: Placement) => {
            it('it renders consistently', () => {
                const inlineConfig: AxisConfig = {
                    zeroIntercept: false,
                    margin: 0,
                    tickPlacement: Placement.Aligned,
                    tickLength: 100,
                };
            
                const bucketConfig: AxisConfig = { ...inlineConfig, tickPlacement: Placement.Bucket };
            
                const props: StackedBarPlotProps = {
                    data: [
                        {
                            seriesName: 'A',
                            type: {
                                x: DataType.Numeric,
                                y: DataType.Numeric,
                            },
                            points: [
                                {
                                    x: 0,
                                    y1: null,
                                },
                                {
                                    x: 1,
                                    y1: 20,
                                },
                                {
                                    x: 2,
                                    y1: 30,
                                }
                            ],
                        },
                        {
                            seriesName: 'B',
                            type: {
                                x: DataType.Numeric,
                                y: DataType.Numeric,
                            },
                            points: [
                                {
                                    x: 0,
                                    y1: 10,
                                },
                                {
                                    x: 1,
                                    y1: null,
                                },
                                {
                                    x: 2,
                                    y1: 30,
                                }
                            ],
                        },
                        {
                            seriesName: 'C',
                            type: {
                                x: DataType.Numeric,
                                y: DataType.Numeric,
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
                                    y1: null,
                                }
                            ],
                        }
                    ],
                    padding: {
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10,
                    },
                    xAxisConfig: {
                        zeroIntercept: true,
                        tickPlacement: placement,
                        margin: 10,
                        tickLength: 10
                    }
                };
        
                const component = TestRenderer.create(<StackedBarPlot {...props}/>);
        
                expect(component.toJSON()).toMatchSnapshot();
            });
        });
    });
});