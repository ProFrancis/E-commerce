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
    category VARCHAR(100) NOT NULL ,
    sexe VARCHAR(50) NOT NUL,
    price INT NOT NULL ,
    is_active VARCHAR(50) NOT NULL
    picture VARCHAR(255) NOT NULL ,
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (id))`) 
}

export function addProductsTable(){
  db.query(`CREATE TABLE IF NOT EXISTS pictures ( id INT NOT NULL AUTO_INCREMENT ,
    user_id INT NOT NULL ,
    path VARCHAR(255) NOT NULL , PRIMARY KEY (id))`) 
}


