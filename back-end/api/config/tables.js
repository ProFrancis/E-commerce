const addUsersTable = (db) => {
  db.query(`CREATE TABLE IF NOT EXISTS users ( id INT NOT NULL AUTO_INCREMENT ,
    first_name VARCHAR(100) NOT NULL ,
    last_name VARCHAR(100) NOT NULL ,
    picture TEXT NOT NULL ,
    email VARCHAR(100) NOT NULL ,
    password VARCHAR(100) NOT NULL ,
    PRIMARY KEY (id))`) 
}

const addProductsTable = (db) => {
  db.query(`CREATE TABLE IF NOT EXISTS products ( id INT NOT NULL AUTO_INCREMENT ,
    user_id INT NOT NULL ,
    product_name VARCHAR(50) NOT NULL ,
    content TEXT NOT NULL ,
    category CHAR(1) NOT NULL ,
    path TEXT NOT NULL ,
    price DECIMAL (5,2) NOT NULL,
    is_active INT NOT NULL ,
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (id))`) 
}

const addPictureTable = (db) => {
  db.query(`CREATE TABLE IF NOT EXISTS pictures ( id INT NOT NULL AUTO_INCREMENT ,
    user_id INT NOT NULL ,
    path VARCHAR(255) NOT NULL , 
    PRIMARY KEY (id))`) 
}

exports.addUsersTable = addUsersTable;
exports.addProductsTable = addProductsTable;
exports.addPictureTable = addPictureTable;