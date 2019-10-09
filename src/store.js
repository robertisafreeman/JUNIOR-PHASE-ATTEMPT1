import { combineReducers, createStore } from 'redux';

const ADD_STUDENT = 'ADD_STUDENT'

const studentsReducer = ( state= [], action )=>{
    if(action.type === 'SET_STUDENTS') {
        state = action.students;
    }
    if(action.type === 'ADD_STUDENT') {
        state = [...state, action.person]
    }
    return state;
};

const reducer = combineReducers({
    students: studentsReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;