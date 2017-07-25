import { FETCH_PHONES } from '../actions/fetchPhones'
import phones from '../seeds/phones'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_PHONES :
      return [].concat(payload)

    default :
      return state
  }
}
