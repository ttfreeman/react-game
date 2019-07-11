import { calculateAngle } from "../utils/formulas";
import createFlyingObjects from "./createFlyingObjects";
import moveMissiles from "./moveMissiles";
import checkCollisions from "./checkCollisions";

function moveObjects(state, action) {
  if (!state.gameState.started) return state;

  let missiles = moveMissiles(state.gameState.missiles);

  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0
  };

  const newState = createFlyingObjects(state);

  const now = new Date().getTime();
  let flyingObjects = newState.gameState.flyingObjects.filter(
    object => now - object.createdAt < 4000
  );

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  const objectsDestroyed = checkCollisions(missiles, flyingObjects);
  const MissilesDestroyed = objectsDestroyed.map(object => object.MissileId);
  const flyingDiscsDestroyed = objectsDestroyed.map(
    object => object.flyingDiscId
  );

  missiles = missiles.filter(missile => MissilesDestroyed.indexOf(missile.id));
  flyingObjects = flyingObjects.filter(flyingDisc =>
    flyingDiscsDestroyed.indexOf(flyingDisc.id)
  );

  const lostLife = state.gameState.flyingObjects.length > flyingObjects.length;
  let lives = state.gameState.lives;
  if (lostLife) {
    lives--;
  }

  const started = lives > 0;
  if (!started) {
    flyingObjects = [];
    missiles = [];
    lives = 3;
  }
  const kills = state.gameState.kills + flyingDiscsDestroyed.length;
  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
      missiles: [...missiles],
      lives,
      started,
      kills
    },
    angle
  };
}

export default moveObjects;
