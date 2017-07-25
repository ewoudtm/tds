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

  renderPhonesList(){
    return (
      this.props.phones.map((phone) => {
        return (
          <div
            key = {phone.id}
            onClick={
              () => {
                this.props.selectPhone(phone)
                this.props.fetchPlans(phone.id)
              }
            }
          >
            {phone.full_name}
          </div>
        )
      })
    )
  }


  render() {
    return (
      <div>
        <div><h1>Test PhonesList</h1></div>
        <div>
          { this.renderPhonesList() }
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
