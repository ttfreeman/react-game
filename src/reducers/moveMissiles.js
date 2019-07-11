import { calculateNextPosition } from "../utils/formulas";

const moveMissiles = missiles =>
  missiles
    .filter(
      missile =>
        missile.position.y > -800 &&
        missile.position.x > -500 &&
        missile.position.x < 500
    )
    .map(missile => {
      const { x, y } = missile.position;
      const { angle } = missile;
      return {
        ...missile,
        position: calculateNextPosition(x, y, angle, 5)
      };
    });

export default moveMissiles;
