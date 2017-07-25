import axios from 'axios'
import { API_AUTH, API_URL } from '../API'
export const FETCH_PHONES = 'FETCH_PHONES'

const PHONE_URL = "/popular/phones"
const NUMBER_OF_PHONES = "?limit=10"
const URL = `${API_URL}${PHONE_URL}${NUMBER_OF_PHONES}`

export default () => {
  console.log("fetching phones")
  return (dispatch) => {
    axios.get(URL, API_AUTH)
    .then(response => {
      console.log(response.data)
      dispatch({
        type: FETCH_PHONES,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
