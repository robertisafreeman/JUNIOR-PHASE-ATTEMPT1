import React from 'react'
import { connect } from 'react-redux';
import { setStudents } from '../store';

class _Schools extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.getSchools()
    }
    render(){
        console.log(schools);
        return(
            <div>
                Schools - there are { schools.length } students!
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = ({ schools }) => ({schools});

const mapDispatchToProps = dispatch => {
    return {
        getStudents: () => dispatch(setStudentsThunk())
    }
}

const Schools = connect(mapStateToProps, mapDispatchToProps)(_Schools);

export default Schools;
