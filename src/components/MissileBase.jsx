import React from "react";

const CannonBase = props => {
  const missileBaseStyle = {
    fill: "#5D9D85",
    stroke: "#35765D",
    strokeWidth: "2px"
  };

  const baseWidth = 80;
  const halfBase = baseWidth / 2;
  const height = 60;
  const halfHeight = height / 2;

  return (
    <g>
      <path
        style={missileBaseStyle}
        d={`M ${halfBase} 40 l ${halfHeight} ${-halfHeight} l ${-halfHeight} ${-halfHeight} h ${-baseWidth} l ${-halfHeight} ${halfHeight} l ${halfHeight} ${halfHeight} z`}
      />
    </g>
  );
};

export default CannonBase;
