import { EXAMPLE } from "../actions/types";
import createReducer from "./createReducer";

export const testReducer = createReducer(
  { initialState: null },
  {
    [EXAMPLE](state, action) {
      return {
        ...state,
        ...action
      };
    }
  }
);
