# react-hooks-bar-chart
Experimental react bar chart component using Hooks.

# BarChart

The bar chart is created using a data prop together with a title and styling configuration for the plot area (Padding) and axes.

```
export interface BarChartProps {
    data: SeriesData[];
    title: string;
    padding: Padding;
    xAxisConfig?: AxisConfig;
    yAxisConfig?: AxisConfig;

```

Notes:

* Series Data is an array of series, each with a name, data type (for x and y) and an array of points making up the series values.
* Padding provides spacing between the edge of the bar plot and the bar chart itself.
* Axes can be configured with a percentage margin around the maximum and minimum values, placement of ticks, tick length and zero intercept


Usage:

```
const myFirstBarChartProps = {
        title: 'My first bar chart',
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
                        y: 10,
                    },
                    {
                        x: 1,
                        y: 20,
                    },
                    {
                        x: 2,
                        y: 30,
                    },
                ],
            },
        ],
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        xAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Bucket,
            tickLength: 2,
        },
        yAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Aligned,
            tickLength: 2,
        },
    };

    // ...

    return <BarChart {...firstBarChartProps}/>;
```







Thanks to [useHooks](https://github.com/gragland/usehooks) for the useAnimation hook.