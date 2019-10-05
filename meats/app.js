const { render } = ReactDOM;
const { Component } = React;
const root = document.querySelector('#root');

class App extends Component {
    constructor() {
        super();
        this.state = {
            students: [],
            schools: []
        }
    }
    async componentDidMount() {
        this.setState({students: (await axios.get('/api/students')).data});
        this.setState({schools: (await axios.get('/api/schools')).data});
    }
    render() {
        const { students, schools } = this.state;
        return (
            <div>
                <h1>JUNIOR PHASE PROJECT</h1>
                <h2>Student List</h2>
                <ul>
                    {
                        students.map(student => <li key={student.id}><span>{student.firstName}</span> <span>{student.lastName}</span></li>)
                    }
                </ul>
                <h2> School List</h2>
                <ul>
                    {
                        schools.map(school => <li key={school.id}>{school.name}</li>)
                    }
                </ul>
            </div>
        )
    }
}
render(<App/>, root)