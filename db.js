const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4 } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/junior_db');

const uuidDef = {
    type: UUID,
    allowNull: false,
    defaultValue: UUIDV4,
    primaryKey: true
};

const School = conn.define('school', {
    id: uuidDef,
    name: STRING
})
const Student = conn.define('student', {
    id: uuidDef,
    name: STRING,
    schoolId: UUID
})


const syncOrSwim = async() => {
    await conn.sync({ force: true });
    const schools = [
        {name: 'Cal Poly'},
        {name: 'Cal Pody'},
        {name: 'Cat Pody'},
        {name: 'Cat Jody'},
        {name: 'Rat Jody'},
        {name: 'Rat Jodd'},
        {name: 'Rut Jodd'},
        {name: 'Rut Jedd'},
        {name: 'Rut Jedi'},
        {name: 'Rut Redi'},
    ]
    const [ a, b, c, d, e, f, g, h, i, j ] = await Promise.all(schools.map(school => School.create(school)));

    const students = [
        {name: 'Dave Dundee', schoolId: a.id },
        {name: 'Sheryl Dundee', schoolId: b.id },
        {name: 'Ed Dundee', schoolId: c.id },
        {name: 'Kyra Dundee', schoolId: d.id },
        {name: 'Hazel Dundee', schoolId: e.id },
        {name: 'Crocodile Dundee', schoolId: f.id },
        {name: 'Harvey Dundee', schoolId: g.id },
        {name: 'Maude Dundee', schoolId: h.id },
        {name: 'Carol Dundee', schoolId: i.id },
        {name: 'Bob Dundee', schoolId: j.id },
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
