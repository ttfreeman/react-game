import { calculateAngle } from "../utils/formulas";

function shoot(state, action) {
  if (!state.gameState.started) return state;

  const { missiles } = state.gameState;

  if (missiles.length === 2) return state;

  const { x, y } = action.mousePosition;

  const angle = calculateAngle(0, 0, x, y);

  const id = new Date().getTime();
  const missile = {
    position: { x: 0, y: 0 },
    angle,
    id
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      missiles: [...missiles, missile]
    }
  };
}

export default shoot;
