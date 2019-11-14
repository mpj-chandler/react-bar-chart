import React from 'react';
import styles from './XAxis.scss';
import { AxisProps } from '../../__types__/axisTypes';
import { getXAxisYPos } from './utils/getXAxisYPos';
import XAxisTicks from '../XAxisTicks/XAxisTicks';
import AxisTitleLabel from '../AxisTitleLabel/AxisTitleLabel';
import { Axis } from '../../enums';

const XAxis: React.FC<AxisProps> = (props) => {
    const axisYPos = getXAxisYPos(props);
    const titlePos = (props.config && props.config.titlePos) ? props.config.titlePos : undefined;

    return (
        <div className={styles.XAxis}>
            <svg className={styles.XAxis__Svg}>
                <line x1={`${props.padding.left}%`} y1={`${axisYPos}%`} x2={`${100 - props.padding.right / 2}%`} y2={`${axisYPos}%`} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                <XAxisTicks { ...props} y1={axisYPos}/>
                <AxisTitleLabel titlePos={titlePos} axis={Axis.XAxis} label={props.title}>{props.title}</AxisTitleLabel>
            </svg>
        </div>
    );
};

export default XAxis;
