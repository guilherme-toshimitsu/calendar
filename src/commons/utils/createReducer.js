const createReducer = (actions) => (state, action) => {
  const { type, ...args } = action
  return (actions.hasOwnProperty(action.type) ? actions[action.type](state, args) : state)
}

export {
  createReducer
}
