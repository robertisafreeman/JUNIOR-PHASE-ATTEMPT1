import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Schools from './Schools';
import Students from './Students';

const _Nav = ({count, location}) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/students'>Students()</Link>
            <Link to='/schools'>Schools()</Link>
        </nav>
    )
};

const Nav = connect(({ Students, Schools }) => {
    return {
        students: Students,
        schools: Schools
    }
})(_Nav);

export default Nav;