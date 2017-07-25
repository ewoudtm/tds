import { FETCH_PHONES } from '../actions/fetchPhones'
import phones from '../seeds/phones'

export default (state = phones, { type } = {}) => {
  switch(type) {
    case FETCH_PHONES :
      return state

    default :
      return state
  }
}
