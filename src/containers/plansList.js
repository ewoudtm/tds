import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


export class PlansList extends PureComponent {

  findProvider(providerId){
    const provider = this.props.providers.find((provider) => {
      return provider.id === providerId
    })
    return (
      provider.name
    )
  }

  dataCreditConverter(dataCredits){
    return (
      dataCredits >= 1000 ? `${dataCredits/1000}GB` : `${dataCredits}MB`
    )
  }

  renderPlansList(){
    return (
      this.props.plans.map((plan, index) => {
        return (
          <tr key = {index}>
            <td>{this.findProvider(plan.provider.id)}</td>
            <td>{this.dataCreditConverter(plan.data_credits)} {plan.voice_credits}min {plan.contract_term_in_months}M</td>
            <td className="SelectionPrice">€ {plan.connection_fee}</td>
            <td className="SelectionPrice">€ {plan.shops[0].tco_per_month}</td>
          </tr>
        )
      })
    )
  }



  renderSelectedPhone(){
    const phone = this.props.selectedPhone
    return (
      <div className="Phonedetail">
        <p><strong>{phone.full_name}</strong></p>
        <img src={phone.image} alt="image of phone"></img>
      </div>
    )
  }

  render() {
    if (this.props.plans.length === 0) {
      return (
        <div className="NoSelection">
          <p><strong>Click on a Phone to show results</strong></p>
        </div>
      )
    }

    return (
      <div className="Selection">
        { this.renderSelectedPhone() }
        <div>
          <table>
            <tr>
              <th>Provider</th>
              <th>Contents</th>
              <th>Fee</th>
              <th>P/M</th>
            </tr>
              { this.renderPlansList()}
          </table>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ plans, selectedPhone, providers }) => ({ plans, selectedPhone, providers })

export default connect(mapStateToProps)(PlansList)
