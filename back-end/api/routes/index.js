const express = require('express')
const router = express.Router()
const db = require('../database/connection.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkAuth = require('../middleware/checkAuth')

// Utils config
const addTables = require('../config/tables.js')

router.post('/sign-up', (req, res) => {
  const { fname, lname, email, password } = req.body 
  const pass = bcrypt.hashSync(password, 10)
  const insertsql = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${fname}', '${lname}', '${email}','${pass}')`
  const selectsql = `SELECT * FROM users WHERE email = '${email}'`
  
  db.query(selectsql, (err, results) => {
    if (err) throw err
    if(results.length){
      res.status(409).json({message: 'This email already registered !'})
    } else {
      db.query(insertsql, (err) => { 
        res.status(200).json({message: 'successfully registered'}) 
      })
    }  
  })
})

.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  console.log(req.body)
  db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, results) => {
    if (err) throw err

    if(results[0] && bcrypt.compareSync(password, results[0].password)){
      let token = jwt.sign(
        { userId: results[0].id, email: results[0].email, userName: results[0].name },
        'itssecretso', 
        { expiresIn: '1h' }
      )
      res.status(201).send({auth: true, token: token}) 
    } else if(!results[0]) {
      res.status(404).send({hasAccount: false, msg: "Sorry, this user isn't recognized"})
    } else {
      res.status(401).send({hasAccount: true, msg: "Wrong password, try again !"})
    } 
  })
})

.get('/users', (req, res) => {
  db.query(`SELECT * FROM users INNER JOIN products WHERE users.id = products.user_id`, (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    results.forEach(elm => delete elm.password) 
    res.status(201).json(results) 
  })
})

.get('/users/:id', (req, res) => {
  const { id } = req.params
  db.query(`SELECT * FROM users INNER JOIN products WHERE users.id = ${id} and products.user_id = ${id}`, (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    results.forEach(elm => delete elm.password) 
    res.status(201).json(results) 
  })
})

// UPLOAD USER 







//
router.post('/products', (req, res) => {
    addTables.addProductsTable(db)
    console.log("BEFORE => ", req.body)
    // db.query(`
    //   INSERT INTO products (user_id, product_name, price, category, content, path, is_active) 
    //   VALUES ('${req.body.userId}','${req.body.productName}','${req.body.price}','${req.body.category}','${req.body.content}','${req.body.picture}', '${req.body.active}')
    // `), err => {
    //   if(err){
    //     console.error(err)
    //     return res.status(500).send(err)
    //   }
    // }
    return res.json(req.body).status(200)
  })

router.get('/products', async (req, res) => {
  db.query('SELECT * FROM products', function(err, response){
    try{  
      return res.json(response).status(200)
    }catch(err){
      return res.send(500).send("Cannot get all Product", err)
    } 
  })
})

router.get('/products/:id', async (req, res) => {
  await db.query(`SELECT * FROM products WHERE user_id = ${req.params.id} `, function(err, response){
    try{  
      return res.json(response).status(200)
    }catch(err){
      return res.send(500).send(`Cannot get product on user_id = ${req.params.id} `, err)
    } 
  })
})

router.put('/products/:id', async (req,res) => {
db.query(`UPDATE products SET is_active = (
  CASE 
    WHEN is_active = 1 THEN 0
    WHEN is_active = 0 THEN 1
  END
  ) WHERE id = '${req.params.id}'`, async function(err, response){
  try{
    return res.json(response).status(200)
  }catch(err){
    return res.send(500).send(`Cannot update product on id = "${req.params.id}" `, err)
  }
})

})

router.delete('/products/:id',  (req, res) => {
  const sql = `DELETE FROM products WHERE id = ${req.params.id}`
  db.query(sql, err => {
    if(err) throw err;
    res.send('Article Deleted !').status(200)
  })
})

module.exports = router