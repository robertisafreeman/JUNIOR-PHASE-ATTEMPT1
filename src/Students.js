import { connect } from 'react-redux';

const _Students = ({ students }) => 
<div>
    Students - there are { students.length } students!
    <hr/>
</div>
;
const Students = connect(({students})=> {
    return {
        students
    }
})(_Students);

export default Students;