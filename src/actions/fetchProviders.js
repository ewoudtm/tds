import axios from 'axios'
import { API_AUTH, API_URL } from '../API'
export const FETCH_PROVIDERS = 'FETCH_PROVIDERS'

const PROVIDER_URL = "/providers"
const URL = `${API_URL}${PROVIDER_URL}`

export default () => {
  console.log("fetching providers")
  return (dispatch) => {
    axios.get(URL, API_AUTH)
    .then(response => {
      console.log(response.data)
      dispatch({
        type: FETCH_PROVIDERS,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
