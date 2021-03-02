// dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
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
    console.log(`connected as id ${connection.threadId}`);
    startApp();
   
}

)
// one function to rule them all
const startApp = () => {
    inquirer.prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
            "View a list of departments",
            "View a list of employees",
            "View a list of roles",
            "Add a department",
            "Add an employee",
            "Add a role",
            "Update an employee's role"
        ],
    })
    .then((answer) => {
        switch (answer.action){
            case "View a list of departments":
                viewDepartments();
                break;
            
            case "View a list of employees":
                viewEmployees();
                break;
            
            case "View a list of roles":
                viewRoles();
                break;
            
            case "Add a department":
                createDepartment();
                break;
            
            case "Add an employee":
                createEmployee();
                break;
            
            case "Add a role":
                createRole();
                break;
            
            case "Update an employee's role":
                updateRole();
                break;
        }
    })

};

// create departments, roles, employees
const createDepartment = () => {
    inquirer.prompt({
        name: 'department',
        type: 'text',
        message: 'What is the name of the new department?',
    }).then((answer) => {
        
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.department]), (err, result) => {
            if (err) throw err;

            console.log(`New department ${answer.department} added.`
        )
        }
    })


};

const createRole = () => {

};

const createEmployee = () => {

};

// read departments roles, employes

const viewDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;

        console.table(res);
        
    })};



const viewEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;

        console.table(res);
    })

};


const viewRoles = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;

        console.table(res);
    })
};

// update employee roles

const updateRole = () => {

};
