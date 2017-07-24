import { FETCH_PLANS } from '../actions/fetchPlans'
import plans from '../seeds/plans'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_PLANS :
      return [Object.assign({}, plans[payload])].concat(state)

    default :
      return state
  }
}
