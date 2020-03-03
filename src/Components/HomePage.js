import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default class HomePage extends Component {
    componentDidMount() {
        history.listen((location)=>{
            ReactGA.set({page: location.pathname});
            ReactGA.pageview(location.pathname)                
        })
        console.log(ReactGA);
    }
    render() {

        return (
            <div>
                Welcome!
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}
