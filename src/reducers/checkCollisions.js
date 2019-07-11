import { checkCollision } from "../utils/formulas";
import { gameHeight } from "../utils/constants";

const checkCollisions = (missiles, flyingDiscs) => {
  const objectsDestroyed = [];
  flyingDiscs.forEach(flyingDisc => {
    const currentLifeTime = new Date().getTime() - flyingDisc.createdAt;
    const calculatedPosition = {
      x: flyingDisc.position.x,
      y: flyingDisc.position.y + (currentLifeTime / 4000) * gameHeight
    };
    const rectA = {
      x1: calculatedPosition.x - 40,
      y1: calculatedPosition.y - 10,
      x2: calculatedPosition.x + 40,
      y2: calculatedPosition.y + 10
    };
    missiles.forEach(missile => {
      const rectB = {
        x1: missile.position.x - 8,
        y1: missile.position.y - 8,
        x2: missile.position.x + 8,
        y2: missile.position.y + 8
      };
      if (checkCollision(rectA, rectB)) {
        objectsDestroyed.push({
          missileId: missile.id,
          flyingDiscId: flyingDisc.id
        });
      }
    });
  });
  return objectsDestroyed;
};

export default checkCollisions;
