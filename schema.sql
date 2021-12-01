DROP DATABASE IF EXISTS employee_db

CREATE DATABASE employee_db

USE employee_db;

CREATE Table department (
    id: INT PRIMARY KEY,
    department_name: VARCHAR(30)
);

CREATE Table role (
    id: INT PRIMARY KEY,
    title: VARCHAR(30)
    salary: DECIMAL
    departmnet_id: INT
);

CREATE Table employee (
    id: INT PRIMARY KEY
    first_name: VARCHAR(30)
    last_name: VARCHAR(30)
    role_id: INT
    maager_id: INT
)