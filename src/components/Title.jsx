import React from "react";
import { pathFromBezierCurve } from "../utils/formulas";

const Title = () => {
  const textStyle = {
    fontFamily: '"Sedgwick Ave Display", cursive',
    fontSize: 120,
    fill: "blue"
  };

  const titleLineCurve = {
    initialAxis: {
      x: -350,
      y: -780
    },
    initialControlPoint: {
      x: 150,
      y: -190
    },
    endingControlPoint: {
      x: 550,
      y: -190
    },
    endingAxis: {
      x: 700,
      y: 0
    }
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path id="TitlePath" d={pathFromBezierCurve(titleLineCurve)} />
      </defs>

      <text {...textStyle}>
        <textPath xlinkHref="#TitlePath">Air Defence!</textPath>
      </text>
    </g>
  );
};

export default Title;
