import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const _Nav = ({count, location}) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/api/students'>Students({count})</Link>
        </nav>
    )
};

const Nav = connect(({students}) => {
    return {
        count: students.length
    }
})(_Nav);

export default Nav;