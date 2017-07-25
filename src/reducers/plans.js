import { FETCH_PLANS } from '../actions/fetchPlans'
import plans from '../seeds/plans'

export default (state = plans, { type, payload } = {}) => {
  switch(type) {
    case FETCH_PLANS :
      return state

    default :
      return state
  }
}
