import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Dev extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        // console.log(this.props.match.params.page);
        fetch('https://cnodejs.org/api/v1/topics?tab=dev&&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res);
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page == 'undefined'){
            prevProps.match.params.page = 1;
        }
        if(prevProps.match.params.page !== this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?tab=dev&&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                // console.log(res);
                this.setState({
                    data:res.data
                })
            })
        }
    }
    render() {
        return (
            <div>
                <div className='All'>
                {
                        this.state.data.map((item)=>(
                            <div className="line" key={item.id}>
                                <Link to={'/detail/'+item.id}>
                                    <img src={item.author.avatar_url}/>
                                    <div className="one" style={{float:'left'}}>{item.reply_count}/{item.visit_count}</div>
                                    <div className="two">测试</div>
                                    <div className="one">{item.title}</div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="but">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item}>
                                <Link to={'/home/dev/'+item}>{item}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
