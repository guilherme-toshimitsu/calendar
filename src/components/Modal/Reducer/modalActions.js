import * as at from './modalActionTypes'

export default {
  [at.OPEN_MODAL]: (state) => {
    return {...state, open: true}
  },
  [at.CLOSE_MODAL]: (state) => {
    return {...state, open: false}
  },
  [at.SELECT_MODAL]: (state, args) => {
    return {...state, selectedModal: args.selectedModal}
  },
  [at.LOAD_PROPS]: (state, args) => {
    return {...state, props: args.props}
  }
}
