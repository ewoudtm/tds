import axios from 'axios'
import { API_AUTH, API_URL } from '../API'

export const FETCH_PLANS = 'FETCH_PLANS'

const PLAN_URL = "/propositions"
const NUMBER_OF_PLANS = "?limit=10"
const URL = `${API_URL}${PLAN_URL}${NUMBER_OF_PLANS}`

export default (phoneId) => {
  console.log("fetching plans")
  return (dispatch) => {
    axios.get(URL.concat(`&phone_id=${phoneId}`), API_AUTH)
    .then(response => {
      console.log(response.data)
      dispatch({
        type: FETCH_PLANS,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
