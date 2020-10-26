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
      res.status(409).json({err_msg: 'This email already registered !'})
    } else {
      db.query(insertsql, (err) => { 
        res.status(200).json({succ_msg: 'successfully registered'}) 
      })
    }  
  })
})

.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, results) => {
    if (err) throw err

    if(results[0] && bcrypt.compareSync(password, results[0].password)){
      let token = jwt.sign(
        { userId: results[0].id, email: results[0].email },
        'itssecretso', 
        { expiresIn: '1h' }
      )
      res.status(201).send({token: token}) 
    } else if(!results[0]) {
      res.status(404).send({msg: "Sorry, this user isn't recognized"})
    } else {
      res.status(401).send({msg: "Wrong password, try again !"})
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
    db.query(`
      INSERT INTO products (user_id, product_name, price, category, content, path, is_active) 
      VALUES ('${req.body.userId}','${req.body.productName}','${req.body.price}','${req.body.category}','${req.body.content}','${req.body.picture}', '${req.body.active}')
    `), err => {
      if(err)
        console.error(err)
        return res.status(500).send(err)
    }
    return res.json({ data: req.body})
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
  db.query(`SELECT * FROM products WHERE user_id = "${req.params.id}"`, function(err, response){
    try{  
      return res.json(response).status(200)
    }catch(err){
      return res.send(500).send(`Cannot get product on user_id = ${req.params.id} `, err)
    } 
  })
})

router.put('/cccc/:id', async (req,res) => {
// PUT


})

router.delete('/createProducts/:id', async (req, res) => {
  de.query(`SELECT * FROM products WHERE user_id = "${req.params.id}"`, function(err, response) {
    try{
      // DELETE
    }catch(err){
      return res.send(500).send(`Cannot delete product on user_id = "${req.params.id}" `, err)
    }
  })
})

module.exports = router