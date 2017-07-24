import { combineReducer } from 'redux'
import phones from './phones'
import plans from './plans'

export const rootReducer = combineReducer({
  phones,
  plans
})

export default rootReducer
