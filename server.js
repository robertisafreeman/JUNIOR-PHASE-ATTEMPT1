const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const { School, Student } = db.models;
const babel = require('@babel/core');

app.get('/api/schools', (req, res, next)=> {
    School.findAll()
        .then(schools => res.send(schools))
        .catch(next);
});

app.get('/api/students', (req, res, next)=> {
    Student.findAll()
        .then(students => res.send(students))
        .catch(next);
});

app.get('/', (req, res, next )=> {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.use('/assets', express.static(path.join(__dirname, 'assets')))


const port = process.env.PORT || 3000;
db.syncOrSwim()
    .then(()=> {app.listen(port, console.log(`listening on port ${port}`))})