import React, { Component } from 'react'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import All from './All'
import Good from './Good'
import Share from './Share'
import Ask from './Ask'
import Job from './Job'
import Dev from './Dev'


import './Home.css';

export default class Home extends React.Component {
    render() {
        let {pathname} = this.props.location; // 这个url就是home
        // console.log(this.props);
        // let {tab} = this.state.data;
        // console.log(this.state.data);
        return (
            <div>
                <div className="link">
                    <Link to="/home/all">全部</Link>
                    <Link to="/home/good">精华</Link>
                    <Link to="/home/share">分享</Link>
                    <Link to="/home/ask">问答</Link>
                    <Link to="/home/job">招聘</Link>
                    <Link to="/home/dev">客户端测试</Link>

                </div>
                <div> 
                <Switch>
                    <Route exact path="/home/all" component={All} />
                    <Route exact path="/home/good" component={Good} />
                    <Route exact path="/home/share" component={Share} />
                    <Route exact path="/home/ask" component={Ask} />
                    <Route exact path="/home/job" component={Job} />
                    <Route exact path="/home/dev" component={Dev} />


                    <Route exact path="/home/all/:page" component={All} />
                    <Route exact path="/home/good/:page" component={Good} />
                    <Route exact path="/home/share/:page" component={Share} />
                    <Route exact path="/home/ask/:page" component={Ask} />
                    <Route exact path="/home/job/:page" component={Job} />
                    <Route exact path="/home/dev/:page" component={Dev} />
                    

                    <Route path='/home' render={()=><Redirect from='/home' to='/home/all'/>}/>
                    {/* <Route exact path="/home/all/:id" component={All} /> */}
                </Switch>
                </div>
                
            </div>
        )
    }
}
