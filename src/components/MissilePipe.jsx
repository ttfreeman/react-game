import React from "react";
import PropTypes from "prop-types";

const CannonPipe = props => {
  const missilePipeStyle = {
    fill: "#999",
    stroke: "#35765D",
    strokeWidth: "2px"
  };
  const transform = `rotate(${props.rotation}, 0, 0)`;

  const muzzleWidth = 25;
  const halfMuzzle = muzzleWidth / 2;
  const length = 100;
  const yBasis = 0;

  return (
    <g transform={transform}>
      <path
        style={missilePipeStyle}
        d={`M 0 ${yBasis} h ${halfMuzzle} v ${-length} h ${-muzzleWidth} v${length}`}
      />
    </g>
  );
};

CannonPipe.propTypes = {
  rotation: PropTypes.number.isRequired
};

export default CannonPipe;
