import * as at from './authActionTypes';

export default {
  [at.LOGIN]: (state, args) => {
    return {
      ...state,
      authenticated: true,
      token: args.token,
      email: args.email,
    };
  },
  [at.LOGOUT]: (state, args) => {
    return { ...state, authenticated: false, token: null };
  },
  [at.SYNC_SESSION]: (state, args) => {
    return { ...state };
  },
  [at.UPDATE_SESSION]: (state, args) => {
    return { ...state };
  },
};
