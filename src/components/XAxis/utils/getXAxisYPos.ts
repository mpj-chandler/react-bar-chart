import { getYAxisRange } from '../../../utils/axisUtils/getYAxisRange/getYAxisRange';
import { AxisProps } from '../../../__types__/axisTypes';
export function getXAxisYPos(props: AxisProps): number {
    const range = getYAxisRange(props.data, props.config);
    const interval = range.max - range.min;
    const totalVerticalPadding = props.padding.top + props.padding.bottom;
    if (range.max <= 0) {
        return props.padding.top;
    }
    return ((100 - totalVerticalPadding) * (range.max / interval)) + props.padding.top;
}
