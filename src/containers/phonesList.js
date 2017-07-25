import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchPhones from '../actions/fetchPhones'
import fetchPlans from '../actions/fetchPlans'
import selectPhone from '../actions/selectPhone'
import phonesListItem from '../components/phonesListItem'


export class PhonesList extends PureComponent {

  componentDidMount() {
    this.props.fetchPhones()
  }

  phoneClicked(phone) {
    this.props.selectPhone(phone)
  }

  renderPhonesList(phones){
    console.log(phones)
    return (
      phones.map((phone) => {
        return (
          <li
            key = {phone.id}
            onClick={
              () => {
                this.props.selectPhone(phone)
                this.props.fetchPlans(phone)
              }
            }
          >
            {phone.full_name}
          </li>
        )
      })
    )
  }


  render() {
    const { phones } = this.props
    return (
      <div>
        <div><h1>Test PhonesList</h1></div>
        <div><h2>{phones[0].full_name}</h2></div>
        <ul>
          { this.renderPhonesList(phones) }
        </ul>
        <div><a href="https://www.w3schools.com">Visit W3Schools.com!</a></div>
        <div>

        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ phones }) => ({ phones })

export default connect(mapStateToProps, {
  fetchPhones,
  fetchPlans,
  selectPhone
})(PhonesList)
