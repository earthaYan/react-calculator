import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom'
import Calculator from './calculator/calculator'
import Weather from './weather/weather';
export default class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/calculator'>计算器</Link>
                        </li>
                        <li>
                            <Link to='/weather'>天气预报</Link>
                        </li>

                    </ul>
                    <hr/>
                    <Switch>
                        <Route  path='/calculator'>
                            <Calculator />
                        </Route>
                        <Route path='/weather'>
                            <Weather/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
