import React from "react";
import PropTypes from "prop-types";

const Missile = props => {
  const ballStyle = {
    fill: "red",
    stroke: "#444",
    strokeWidth: "2px"
  };
  const transform = `rotate(${props.rotation}, ${props.position.x},${
    props.position.y
  })`;

  return (
    <g transform={transform}>
      <path
        d={`M ${props.position.x} ${
          props.position.y
        } c -6 15 -7.5 30 -7.5 60 l 7.5 -7.5 l 7.5 7.5 c 0 -30 -1.5 -45 -7.5 -60`}
        style={ballStyle}
      />
    </g>
  );
};

Missile.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default Missile;
