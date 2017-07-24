import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//import phones from '../seeds/phones'
import fetchPlans from '../actions/fetchPlans'

export class PlansList extends PureComponent {
  static propTypes = {
    plans: PropTypes.array.isRequired,
  }

  if(plans.length === 0) return (
    <div>Select a Phone</div>
  )

  const renderPlansList = ({ plans }) => (
    plans.map(plan) => (
      <li key = {index}>
        <div>provider: {plan.provider.id}</div>
      </li>
    )
  )

  render() {
    return (
      <div>
        <ul>
          { this.renderPlansList.bind(this) }
        </ul>
      </div>
    )
  }
}




const mapStateToProps = ({ plans }) => ({ plans })

export default connect(mapStateToProps)(PlansList)
