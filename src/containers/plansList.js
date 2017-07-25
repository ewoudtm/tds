import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


export class PlansList extends PureComponent {

  renderPlansList(){
    return (
      this.props.plans.map((plan, index) => {
        return (
          <div key = {index}>
            <div>{plan[0].provider.id}</div>
            <div>{plan[1].provider.id}</div>
            <div>{plan[2].provider.id}</div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <div><h1>Test PlansList</h1></div>
        <div>
          { this.renderPlansList()}
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ plans }) => ({ plans })

export default connect(mapStateToProps)(PlansList)
