import store from './store'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



const Dumb = (props) => {
 return (
  <main className = 'main'>
    <button> Dumb </button>
    {props.test}
  </main>
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
)(Dumb)

// export default List