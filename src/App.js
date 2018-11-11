import React from 'react'
import Admin from './pages/Admin'
import Login from './pages/Login'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import './common_css/main.less'
class App extends React.Component{
   render(){
      return (
         <HashRouter>
            <div className='app'>
               <Switch>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/admin' component={Admin}></Route>
                  <Route path='/order/detail' component={Login}></Route>
                  <Route path="/" render={()=><Redirect to="/admin"/>}/>
               </Switch>
            </div>
         </HashRouter>
      );
   }
}

export default App;