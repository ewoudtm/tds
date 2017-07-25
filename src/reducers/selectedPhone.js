import { SELECTED_PHONE } from '../actions/selectPhone'

export default (state = {}, { type, payload } = {}) => {
  switch(type) {
    case SELECTED_PHONE :
      return Object.assign({}, payload)

    default :
      return state
  }
}
