import { MOVE_OBJECTS } from "../actions";
import moveObjectsReducer from "./moveObjectsReducer";

const initialState = {
  angle: 45
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjectsReducer(state, action);
    default:
      return state;
  }
}

export default reducer;
