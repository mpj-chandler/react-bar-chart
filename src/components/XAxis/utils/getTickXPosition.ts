import { getXAxisRange } from '../../../utils/axisUtils/getXAxisRange/getXAxisRange';
import { Placement } from '../../../enums/Placement';
import { AxisTickProps } from '../../../__types__/axisTypes';
import DataType from '../../../enums/DataType';

export function getTickXPosition(
    props: AxisTickProps,
    dataType: DataType,
    labelConfig: { index: number, label: string }): number {

        switch (dataType) {
        case DataType.NonNullNumeric:
        case DataType.Numeric:
            const value = Number(labelConfig.label);

            if (isNaN(value)) {
                throw new Error('Error in calculating XAxis tick position! Label must be convertable to a number for label of this type!');
            }

            return getNumericTickXPosition(props, value);

        case DataType.Named:
            return getNumericTickXPosition(props, labelConfig.index);

        default:
            throw new Error('Error in calculating XAxis tick position! Data type not recognised!');
    }
}

function getNumericTickXPosition(props: AxisTickProps, value: number) {
    const range = getXAxisRange(props.data, props.config);
    const numPoints = props.data[0].points.length;
    const interval = range.max - range.min;
    const totalHorizontalPadding = props.padding.right + props.padding.left;

    if (props.config && props.config.tickPlacement === Placement.Bucket) {
        const step = interval / numPoints;

        return ((100 - totalHorizontalPadding) * ((step + value - range.min) / interval)) + props.padding.left;
    }

    return ((100 - totalHorizontalPadding) * (value - range.min) / interval) + props.padding.left;
}
