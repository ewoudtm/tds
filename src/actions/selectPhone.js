export const SELECTED_PHONE = 'SELECTED_PHONE'

export default (phone) => {
  return {
    type: SELECTED_PHONE,
    payload: phone
  }
}
