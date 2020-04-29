import React from 'react'
import './weather.scss'
import { 
    BrowserRouter as Router,
    Link,Route,
    useRouteMatch, Switch, useParams } from 'react-router-dom'
export  default class Weather extends React.Component{
    render(){
        return (
            <div>
                
            </div>
        )
    }
}
function Topics(){
    let {topicId}=useParams()
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    )
}