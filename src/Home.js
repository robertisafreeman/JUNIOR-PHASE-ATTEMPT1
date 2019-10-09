import React from 'react';
import { connect } from 'react-redux';
const _Home = ({students}) => 
        <div>
            Home - there are {students.length} students!
            <hr/>
        </div>
;

const Home = connect(({students})=> {
    return {
        students
    }
})(_Home);

export default Home;