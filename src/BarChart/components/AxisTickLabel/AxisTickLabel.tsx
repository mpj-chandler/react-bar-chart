import React, { useRef, useState, useEffect, RefObject } from 'react';
import styles from './AxisTickLabel.scss';
import Axis from '../../enums/Axis';

export interface AxisTickLabelProps {
    label: string;
    xPos: number;
    yPos: number;
    axis: Axis;
}

const AxisTickLabel: React.FC<AxisTickLabelProps> = (props: AxisTickLabelProps) => {
    const ref = useRef();
    const [ xTransform, setXTransform ] = useState(0);
    const [ yTransform, setYTransform ] = useState(0);

    useEffect(() => {
        if (props.axis === Axis.XAxis) {
            setXTransform(-0.5 * (ref.current as unknown as SVGTextContentElement).getBBox().width);

            return;
        }
        setXTransform(-1.25 * (ref.current as unknown as SVGTextContentElement).getBBox().width);
        setYTransform(0.25 * (ref.current as unknown as SVGTextContentElement).getBBox().height);
    },
    [ref.current]);

    return (
        <text
                ref={ref as unknown as RefObject<SVGTextElement>}
                key={`tickText-${props.label}`}
                className={styles.AxisTickLabel}
                x={`${props.xPos}%`}
                y={`${props.yPos}%`}
                stroke={'black'}
                style={{ transform: `translate(${xTransform}px, ${yTransform}px)`}}
        >
            {props.label}
        </text>
    );
};

export default AxisTickLabel;
