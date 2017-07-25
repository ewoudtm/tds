import { combineReducers } from 'redux'
import phones from './phones'
import plans from './plans'
import selectedPhone from './selectedPhone'

const rootReducer = combineReducers({
  phones,
  plans,
  selectedPhone,
})

export default rootReducer
