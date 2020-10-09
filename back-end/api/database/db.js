const db = require('./db')

// export function createdbEcommerc(){
//   db.query('CREATE DATABASE e-commerce-wf')
// }

export function addUsersTable(){
  db.query(`CREATE TABLE IF NOT EXISTS users ( id INT NOT NULL AUTO_INCREMENT ,
    first_name VARCHAR(100) NOT NULL ,
    last_name VARCHAR(100) NOT NULL ,
    email VARCHAR(100) NOT NULL ,
    password VARCHAR(100) NOT NULL ,
    PRIMARY KEY (id))`) 
}


export function addProductsTable(){
  db.query(`CREATE TABLE IF NOT EXISTS products ( id INT NOT NULL AUTO_INCREMENT ,
    product_name VARCHAR(100) NOT NULL ,
    description TEXT NOT NULL ,
    category INT NOT NULL , price INT NOT NULL ,
    picture VARCHAR(255) NOT NULL ,
    PRIMARY KEY (id))`) 
}