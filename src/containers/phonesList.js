import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//import phones from '../seeds/phones'
import fetchPhones from '../actions/fetchPhones'
import fetchPlans from '../actions/fetchPlans'

export class PhonesList extends PureComponent {

  static propTypes = {
    phones: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.fetchPhones()
  }

  const renderPhonesList = ({ phones }) => (
    phones.map(phone) => (
      <li
        key = {phone.id}
        onClick = { () =>
          this.props.selectPhone(phone)
          this.props.fetchPlans(phone.id) }
      >
        {phone.full_name}
      </li>
    )
  )

  render() {
    return (
      <div>
        <ul>
          { this.renderPhonesList.bind(this) }
        </ul>
      </div>
    )
  }
}




const mapStateToProps = ({ phones, phone }) => ({ phones, phone })

export default connect(mapStateToProps, {
  fetchPhones,
  fetchPlans,
  selectPhone
})(PhonesList)
