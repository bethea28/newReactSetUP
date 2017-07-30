import store from './store'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



const Pic = (props) => {

 return (
 
 
    <img className = 'image media' src={props.picture}/> 
 
 
 )
}
 
  

const mapPropsToState = (state)=> {
  return {
    item: state.item,
    test: state.test,
    list: state.list
  }
}

const dispatchPropsToState = dispatch => (
  bindActionCreators({

  }, dispatch)
)

export default connect(
  mapPropsToState,
  dispatchPropsToState
)(Pic)

// export default List