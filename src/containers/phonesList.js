import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
//import phones from '../seeds/phones'
import fetchPhones from '../actions/fetchPhones'
import fetchPlans from '../actions/fetchPlans'
import selectPhone from '../actions/selectPhone'


export class PhonesList extends PureComponent {

  componentDidMount() {
    this.props.fetchPhones()
  }

  renderPhonesList(phones) {
    this.props.phones.map((phone) => {
      return (
        <li
          key = {phone.id}
          onClick = { () =>
            this.props.selectPhone(phone),
            this.props.fetchPlans(phone.id) }
        >
          {phone.full_name}
        </li>
      )
    })
  }

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
