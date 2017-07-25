import { SELECTED_PHONE } from '../actions/selectPhone'

export default (state = {}, { type } = {}) => {
  switch(type) {
    case SELECTED_PHONE :
      return state

    default :
      return state
  }
}
