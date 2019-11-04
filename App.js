import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Panel from './Components/Panel'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Home from './Container/Home/Home'
import Start from './Container/Start'
import Api from './Container/Api'
import About from './Container/About'
import Detail from './Container/Home/Detail'
import Register from './Container/Register'
import Signin from './Container/Signin'

export default class App extends Component {
    render() {
        // let {url} = this.props.match;
        return (
            <Router basename="/build">
                <div>
                    <Header />
                </div>
                <div className="content">
                    <div className="left">
                        <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/signin' component={Signin}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/' render={()=><Redirect from='/' to='/home'/>}/>
                        </Switch>
                    </div>
                    <div className="right">
                        <Panel />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </Router>
        )
    }
}
