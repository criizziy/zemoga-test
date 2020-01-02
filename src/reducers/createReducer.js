export default function createReducer(initialState, handler) {
  return function reducer(state = initialState, action) {
    // eslint-disable-next-line no-prototype-builtins
    if (handler.hasOwnProperty(action.type)) {
      return handler[action.type](state, action);
    }
    return state;
  };
}
