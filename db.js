const Sequelize = require('sequelize');
const { STRING, DECIMAL, UUID, UUIDV4 } = Sequelize;


const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/junior_db');

const uuidDef = {
    type: UUID,
    allowNull: false,
    defaultValue: UUIDV4,
    primaryKey: true,
};

// const Nav = ({ school, student }) => {
//     const links = [
//         {text: 'Schools', to:'./schools', count: school.length},
//         {text: 'Students', to:'./students', count: student.length}
//     ];
//     return (
//         <nav>
//            {
//                links.map(link => <NavLink key={link.text} to={link.to}>{link.text}</NavLink>)
//            }
//         </nav>
//     )
// };

const School = conn.define('school', {
    id: uuidDef,
    name:{
        type: STRING,
        allowNull: false,

    },
    imgURL:{
        type: STRING,
        allowNull: false
    }
});

const Student = conn.define('student', {
    id: uuidDef,
    firstName: {
        type: STRING,
        allowNull: false
    },
    lastName: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: true,
        unique: true
    },
    gpa: {
        type: DECIMAL,
        allowNull: false
    }
})

Student.belongsTo(School);
School.hasMany(Student);

const syncOrSwim = async() => {
    await conn.sync({ force: true });
    const schools = [
        {name: 'Cal Poly', imgURL:'www.google.com'},
        {name: 'Cal Dolly', imgURL:'www.google.com'},
        {name: 'Cal Ripkin', imgURL:'www.google.com'},
        {name: 'Cal Talledega', imgURL:'www.google.com'},
        {name: 'Cal Country', imgURL:'www.google.com'},
        {name: 'Cal Ifornia', imgURL:'www.google.com'},
        {name: 'Cal El', imgURL:'www.google.com'},
        {name: 'Cal Poly Pomona', imgURL:'www.google.com'},
        {name: 'Cal Bell', imgURL:'www.google.com'},
        {name: 'Cal Sify', imgURL:'www.google.com'},
       
    ]
    const [ a, b, c, d, e, f, g, h, i, j ] = await Promise.all(schools.map(school => School.create(school)));

    const students = [
        {firstName: 'Dave', lastName: 'Dundee', gpa: 1.2, schoolId: a.id },
        {firstName: 'Sheryl', lastName: 'Dundee', gpa: 2.3, schoolId: b.id },
        {firstName: 'Ed', lastName: 'Dundee', gpa: 4.3, schoolId: c.id },
        {firstName: 'Kyra', lastName: 'Dundee', gpa: 2.7, schoolId: d.id },
        {firstName: 'Hazel',lastName: 'Dundee', gpa: 3.6, schoolId: e.id },
        {firstName: 'Crocodile', lastName: 'Dundee', gpa: 4.1, schoolId: f.id },
        {firstName: 'Harvey', lastName: 'Dundee', gpa: 1.3, schoolId: g.id },
        {firstName: 'Maude', lastName: 'Dundee', gpa: 1.7, schoolId: h.id },
        {firstName: 'Carol', lastName: 'Dundee', gpa: 2.8, schoolId: i.id },
        {firstName: 'Bob', lastName: 'Dundee', gpa: 3.0, schoolId: j.id },
    ]
     const [ dave, sheryl, ed, kyra, hazel, croc, harvey, maude, carol, bob ] = await Promise.all(students.map(student => Student.create(student)));
}

// syncOrSwim()
//     .then(()=> console.log('success'))
//     .catch(ex = console.log('failure'))

module.exports = {
    syncOrSwim,
    models: {
        School,
        Student
    }
}
