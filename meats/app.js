import { connect } from "react-redux";
import ReactRedux from "react-redux";
import ReactRouterDOM from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Component } from 'react';

const root = document.querySelector('#root');

import {HashRouter, Link, Route} from 'react-router-dom';
import { combineReducers, createStore} from 'redux';

const studentReducer = ( state= [], action )=>{
    if(action.type === 'SET_STUDENT') {
        state = action.student;
    }
    return state;
}

const reducer = combineReducers( {
    students: studentReducer
});

const store = createStore(reducer);

setTimeout(()=> {
    store.dispatch({type: 'SET_STUDENT', student: [{id: 1, name: 'moe'}]})
}, 1000)

// const connect = (Component)=> {
//     return class Connected extends Component{
//         constructor() {
//             super();
//             this.state = store.getState();
//         }
//         render() {
//             return <Component {...this.state} />        
//         }
//     }
// }

const _Nav = ({students}) => {
    return (
        <nav>
            <Link to='/api/students'>Students</Link>
        </nav>
    )
};

const Nav = connect((state) => {
    return ({
        students: state.students,
        schools: state.schools
    })
})(_Nav)

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route component={_Nav}/>
                <Route path='/' component={ Home } exact/>
                <Route path='/schools' component={ Schools } />
                <Route path='/students' component={ Students } />
            </HashRouter>
        )
    }
    // constructor() {
    //     super();
    //     this.state = {
    //         students: [],
    //         schools: []
    //     }
    // }
    // async componentDidMount() {
    //     this.setState({students: (await axios.get('/api/students')).data});
    //     this.setState({schools: (await axios.get('/api/schools')).data});
    // }
    // render() {
    //     const { students, schools } = this.state;
    //     return (
    //         <div>
    //             <h1>JUNIOR PHASE PROJECT</h1>
    //             <h2>Student List</h2>
    //             <ul>
    //                 {
    //                     students.map(student => <li key={student.id}><span>{student.firstName}</span> <span>{student.lastName}</span></li>)
    //                 }
    //             </ul>
    //             <h2> School List</h2>
    //             <ul>
    //                 {
    //                     schools.map(school => <li key={school.id}>{school.name}</li>)
    //                 }
    //             </ul>
    //         </div>
    //     )
    // }
}
ReactDOM.render(<App/>, root)