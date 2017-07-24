import { FETCH_PHONES } from '../actions/fetchPhones'

import phones from '../seeds/phones'
console.log(phones)

export default (state = [], { type } = {}) => {
  switch(type) {
    case FETCH_PHONES :
      return [Object.assign({}, phones)].concat(state)

    default :
      return state
  }
}
