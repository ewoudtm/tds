import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchPlans from '../actions/fetchPlans'

export class PlansList extends PureComponent {

  renderPlansList(plans) {
    this.props.plans.map((plan, index) => {
      return (
        <li key = {index}>
          <div>provider: {plan.provider.id}</div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div><h1>Test PlansList</h1></div>
        <ul>
          { this.renderPlansList.bind(this) }
        </ul>
      </div>
    )
  }
}




const mapStateToProps = ({ plans }) => ({ plans })

export default connect(mapStateToProps)(PlansList)
