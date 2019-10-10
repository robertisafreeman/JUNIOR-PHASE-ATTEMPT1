import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store;