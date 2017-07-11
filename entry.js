
import React from 'react'
import {Provider} from 'react-redux'
import Smart from './app'
import {Route} from 'react-router'
import {HashRouter} from 'react-router-dom'
import store from './store'
import {render} from 'react-dom'



const Routes = () => (
 <div>
  <Route path = '/' component = {Smart} > </Route>
 </div>

)


render (
 <Provider store = {store}>
  <HashRouter>
   <Routes />
  </HashRouter>
 </Provider>,
 document.getElementById('root')
)