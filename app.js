``  
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import store from './store'
import Pic from './picComponent'
import  './styles.scss'


class Smart extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: '',
      list: [],
      pics: ['https://img1.etsystatic.com/051/0/8191565/il_570xN.675743885_g70u.jpg','http://i.forbesimg.com/media/2009/12/16/1216_cash-dollars_650x455.jpg']
      
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
      
     
       <section className ='pics'> 
       
          <Pic picture = {this.state.pics[0]} />
            <p className ='vs'>VS</p>
          <Pic picture = {this.state.pics[1]} />

       </section>

   
      
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