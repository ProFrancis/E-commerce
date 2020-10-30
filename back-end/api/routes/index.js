const express = require('express')
const router = express.Router()
const db = require('../database/connection.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkAuth = require('../middleware/checkAuth')

// Utils config
const addTables = require('../config/tables.js')

router.post('/sign-up', (req, res) => {
  addTables.addUsersTable(db)
  const { fname, lname, email, password } = req.body 
  const pass = bcrypt.hashSync(password, 10)
  const insertsql = `INSERT INTO users (first_name, last_name, picture, email, password) VALUES ('${fname}', '${lname}', '','${email}','${pass}')`
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
      const token = jwt.sign(
        { userId: results[0].id, 
          fname: results[0].first_name,
          lname: results[0].last_name,
          email: results[0].email, },
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

.put('/user/:id', checkAuth, (req, res) => {
  const id = req.params.id
  const data = req.body

  Object.keys(data).forEach(e => e == 'password' && (data[e] = bcrypt.hashSync(data[e], 10)))
  const fields = Object.keys(data).map(e => data[e] && `${e} = "${data[e]}"`).join(', ')

  db.query(`UPDATE users SET ${fields} WHERE id = ${id}`, (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    res.status(201).json(results) 
  })

  res.status(201).json(fields) 
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
  db.query(`SELECT * FROM users INNER JOIN products on users.id = products.user_id where products.user_id = ${id}`, (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    results.forEach(elm => delete elm.password) 
    res.status(201).json(results) 
  })
})

router.post('/products', (req, res) => {
    addTables.addProductsTable(db)
    db.query(`
      INSERT INTO products (user_id, product_name, price, category, content, path, is_active) 
      VALUES ('${req.body.userId}','${req.body.productName}','${req.body.price}','${req.body.category}','${req.body.content}','${req.body.picture}', '${req.body.active}')
    `), err => {
      if(err){
        console.error(err)
        return res.status(500).send(err)
      }
    }
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