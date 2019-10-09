import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Schools from './Schools';
import Students from './Students';

const _Nav = ({count, location}) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/api/students'>Students()</Link>
            <Link to='/api/schools'>Schools()</Link>
        </nav>
    )
};

const Nav = connect(({ students, schools }) => {
    return {
        students: students,
        schools: schools
    }
})(_Nav);

export default Nav;