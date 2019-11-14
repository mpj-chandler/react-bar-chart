import React, { useRef, useState, useEffect, RefObject } from "react";
import styles from "./AxisTitleLabel.scss";
import Axis from "../../enums/Axis";
import { number } from 'prop-types';

export interface AxisTitleLabelProps {
  label: string;
  titlePos?: {
      xPos: number
      yPos: number
  };
  axis: Axis;
}

const xAxisDefaults: Partial<AxisTitleLabelProps> = {
    titlePos: {
        xPos: 50,
        yPos: 95
    }
}

const yAxisDefaults: Partial<AxisTitleLabelProps> = {
    titlePos: {
        xPos: 5,
        yPos: 50
    }
};

const AxisTitleLabel: React.FC<AxisTitleLabelProps> = (props) => {

    const defaults: Partial<AxisTitleLabelProps> = props.axis === Axis.XAxis ? xAxisDefaults : yAxisDefaults;
    
    const normalisedProps: AxisTitleLabelProps = { ...props, titlePos: props.titlePos || defaults.titlePos };


  const ref = useRef();
  const [xTransform, setXTransform] = useState(0);
  const [yTransform, setYTransform] = useState(0);

  useEffect(() => {
    if (normalisedProps.axis === Axis.XAxis) {
      setXTransform(
        -0.5 *
          ((ref.current as unknown) as SVGTextContentElement).getBBox().width
      );

      return;
    }
    setXTransform(
      -1.25 *
        ((ref.current as unknown) as SVGTextContentElement).getBBox().width
    );
    setYTransform(
      0.25 *
        ((ref.current as unknown) as SVGTextContentElement).getBBox().height
    );
  }, [ref.current]);

  return (
    <text
      ref={(ref as unknown) as RefObject<SVGTextElement>}
      key={`tickText-${normalisedProps.label}`}
      className={styles.AxisTitleLabel}
      x={`${normalisedProps.titlePos.xPos}%`}
      y={`${normalisedProps.titlePos.yPos}%`}
      stroke={"black"}
      style={{ transform: `translate(${xTransform}px, ${yTransform}px)` }}
    >
      {normalisedProps.label}
    </text>
  );
};

export default AxisTitleLabel;
