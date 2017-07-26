import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchPhones from '../actions/fetchPhones'
import fetchPlans from '../actions/fetchPlans'
import fetchProviders from '../actions/fetchProviders'
import selectPhone from '../actions/selectPhone'
import phonesListItem from '../components/phonesListItem'



export class PhonesList extends PureComponent {

  componentDidMount() {
    this.props.fetchPhones()
    this.props.fetchProviders()
  }

  phoneClicked(phone) {
    this.props.selectPhone(phone)
  }

  renderPhonesList(){
    return (
      this.props.phones.map((phone) => {
        return (
          <div className={ phone.id === this.props.selectedPhone.id ? "PhonelistItem Selected" : "PhonelistItem"}
            key = {phone.id}
            onClick={
              () => {
                this.props.selectPhone(phone)
                this.props.fetchPlans(phone.id)
              }
            }
          >
            <text>{phone.full_name}</text>
          </div>
        )
      })
    )
  }


  render() {
    return (
      <div className="Phonelist">
        { this.renderPhonesList() }
      </div>
    )
  }
}


const mapStateToProps = ({ phones, selectedPhone }) => ({ phones, selectedPhone })

export default connect(mapStateToProps, {
  fetchPhones,
  fetchPlans,
  selectPhone,
  fetchProviders,
})(PhonesList)
