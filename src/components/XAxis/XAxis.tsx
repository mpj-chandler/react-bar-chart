import React from 'react';
import styles from './XAxis.scss';
import { AxisProps } from '../../__types__/axisTypes';
import { getXAxisYPos } from './utils/getXAxisYPos';
import XAxisTicks from '../XAxisTicks/XAxisTicks';


const XAxis: React.FC<AxisProps> = (props) => {
    const axisYPos = getXAxisYPos(props);

    return (
        <div className={styles.XAxis}>
            <svg className={styles.XAxis__Svg}>
                <line x1={`${props.padding.left}%`} y1={`${axisYPos}%`} x2={`${100 - props.padding.right / 2}%`} y2={`${axisYPos}%`} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                <XAxisTicks { ...props} y1={axisYPos}/>
            </svg>
        </div>
    );
};

export default XAxis;
