
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import store from './store'
import Dumb from './dumbComponent'
import  './styles.scss'


class Smart extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  } 

  handleChange(arg){
    // console.log(arg)
    this.setState({item: arg})
    console.log(this.state.item)
  }
  handleSubmit(event){
    event.preventDefault()
    this.setState({list: this.state.list.concat(this.state.item)})
    console.log(this.state.list)
  }

  render(){
    return (
      <main className = "appMain" >
        <button> Smart </button>
        {store.getState().test}
        <Dumb />
      </main>
      
    )
  }
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
)(Smart)


// export default App