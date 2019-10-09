import { connect } from 'react-redux';

const _Students = ({ students }) => 
<div>
    Students - there are { students.length } students!
    <hr/>
</div>
;
const mapStateToProps = ({students}) => ({students});

const Students = connect(mapStateToProps)(_Students)

export default Students;