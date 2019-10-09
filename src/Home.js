import React from 'react';
import { connect } from 'react-redux';

const _Home = ({students}) => <div>
    <h1>
        Home
    </h1>
    <hr/>
    <div>
        Our most popular school is The Clown College with 100 students!
    </div>
    <hr/>
    <div>
        Our top performing school is The School for Dogs with an average GPA of 4.6!
    </div>
    <hr/>
    </div>
;

const mapStateToProps = ({students, schools}) => ({students, schools});

const Home = connect(mapStateToProps)(_Home);

export default Home;