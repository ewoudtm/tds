import { FETCH_PLANS } from '../actions/fetchPlans'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_PLANS :
      return [].concat(payload)

    default :
      return state
  }
}
