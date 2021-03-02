// dependencies
const mysql = require('mysql');
const inquirer = require('inuirer');
const consoleTable = require('console.table');

// connection object
const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'a1b2c3d4',
    database: 'employees'
})

// connecting to database
connection.connect((err) => {
    if (err) throw err;
}

)
// create departments, roles, employees with POST

const createDepartment = () => {

};

const createRole = () => {

};

const createEmployee = () => {

};

// read departments roles, employes with GET

const viewDepartment = () => {

};


const viewRole = () => {

};


const viewRoles = () => {

};

// update employee roles with PUT

const updateRoles = () => {

};
