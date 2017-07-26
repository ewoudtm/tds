import { combineReducers } from 'redux'
import phones from './phones'
import plans from './plans'
import selectedPhone from './selectedPhone'
import providers from './providers'

const rootReducer = combineReducers({
  phones,
  plans,
  selectedPhone,
  providers,
})

export default rootReducer
