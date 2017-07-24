export const FETCH_PLANS = 'FETCH_PLANS'

export default (phoneId) => {
  return {
    type: FETCH_PLANS,
    payload: phoneId
  }
}
