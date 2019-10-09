import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route } from "react-router-dom";
import { Provider, connect} from "react-redux";
import { combineReducers, createStore } from "redux";
import Nav from './Nav';
import Home from './Home';
import Students from './Students';

import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Route component={Nav}/>
                    <Route path='/' component={ Home } exact/>
                    <Route path='/students' component={ Students } />
                </HashRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));