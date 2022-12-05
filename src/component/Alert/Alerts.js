import React from 'react'
import {connect} from "react-redux"
import  { Alert }  from "react-bootstrap"

const Alerts = props => {
  return (
    props.alerts.length > 0 && props.alerts.map(alert =>
        (
            <div style={{"color":"red"}} key={alert.id} variant={alert.type}>
          {alert.msg}
            </div>
          
        ))

  )
}
const mapStateToProps = state =>{
    return{
        alerts:state.alert
    }
}
export default connect(mapStateToProps) (Alerts)
