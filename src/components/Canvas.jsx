import React from "react";
import PropTypes from "prop-types";
import Sky from "./Sky";
import Ground from "./Ground";
import MissileBase from "./MissileBase";
import MissilePipe from "./MissilePipe";
import CurrentScore from "./CurrentScore";
import FlyingObject from "./FlyingObject";
import StartGame from "./StartGame";
import Title from "./Title";
import Missile from "./Missile";
import Life from "./Life";

const Canvas = props => {
  const gameHeight = 1200;
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHeight,
    window.innerWidth,
    gameHeight
  ];
  const lives = [];
  for (let i = 0; i < props.gameState.lives; i++) {
    const lifePosition = {
      x: -180 - i * 70,
      y: 10
    };
    lives.push(<Life key={i} position={lifePosition} />);
  }
  const startColors = ["blue", "yellow", "red", "green"];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
      onClick={props.shoot}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      {props.gameState.missiles.map(missile => (
        <Missile
          key={missile.id}
          position={missile.position}
          rotation={missile.angle}
        />
      ))}
      <MissilePipe rotation={props.angle} />
      <MissileBase />
      <CurrentScore score={props.gameState.kills} />

      {!props.gameState.started && (
        <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      )}

      {props.gameState.flyingObjects.map(flyingObject => (
        <FlyingObject key={flyingObject.id} position={flyingObject.position} />
      ))}
      {lives}
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired
};

export default Canvas;
