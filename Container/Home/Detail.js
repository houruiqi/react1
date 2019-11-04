import React, { Component } from 'react'
import './Detail.css'

export default class Detail extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res);
            this.setState({
                data:res.data
            })
        })
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <h2 className="title">{this.state.data.title}</h2>
                <ul>
                    <li>发布于6个月前</li>
                    <li>作者 atian25</li>
                    <li>142309次浏览</li>
                    <li>来自 分享</li>
                </ul>
                <div className="detail" dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
            
            </div>    
        )
    }
}
