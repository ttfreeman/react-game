import React from "react";
import PropTypes from "prop-types";
import { pathFromBezierCurve } from "../utils/formulas";

const Life = props => {
  const lifeStyle = {
    fill: "#da0d15",
    stroke: "#a51708",
    strokeWidth: "2px"
  };

  const leftSide = {
    initialAxis: {
      x: props.position.x,
      y: props.position.y
    },
    initialControlPoint: {
      x: -8,
      y: 20
    },
    endingControlPoint: {
      x: -10,
      y: 40
    },
    endingAxis: {
      x: -10,
      y: 80
    }
  };

  const rightSide = {
    initialAxis: {
      x: props.position.x,
      y: props.position.y
    },
    initialControlPoint: {
      x: 8,
      y: 20
    },
    endingControlPoint: {
      x: 10,
      y: 40
    },
    endingAxis: {
      x: 10,
      y: 80
    }
  };

  return (
    <g filter="url(#shadow)">
      <path style={lifeStyle} d={pathFromBezierCurve(leftSide) + " l 10 -10"} />
      <path
        style={lifeStyle}
        d={pathFromBezierCurve(rightSide) + "l -10 -10"}
      />
    </g>
  );
};

Life.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default Life;
