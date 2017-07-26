import { FETCH_PROVIDERS } from '../actions/fetchProviders'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_PROVIDERS :
      return [].concat(payload)

    default :
      return state
  }
}
