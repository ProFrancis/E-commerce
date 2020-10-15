const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Utils config
const pathProduct = '../../../front-end/public/products'
const addTables = require('../config/tables.js')

router.post('/sign-up', (req, res) => {
  const {fname, lname, email} = req.body 
  const pass = bcrypt.hashSync(req.body.password, 10)
  const sql = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${fname}', '${lname}', '${email}','${pass}')`

  db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, results) => {
    if (err) throw err
    if(results.length){
      res.status(400).send('This email already registered !')
    } else {
      db.query(sql, (err) => { res.status(200).send('successfully registered') })
    }  
  })
})

.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  
  db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, results) => {
    if (err) throw err

    if(results[0] && bcrypt.compareSync(password, results[0].password)){
      let token = jwt.sign({userId: results[0].id, email: results[0].email, userName: results[0].name}, 'usersecret')
      res.status(201).send({auth: true, token: token}) 
    } else if(!results[0]) {
      res.status(400).send({hasAccount: false ,msg: "Sorry, this user isn't recognized"})
    } else {
      res.status(400).send({hasAccount: true, msg: "Wrong password, try again !"})
    } 
  })
})

// UPLOAD USER 







//



router.post('/createProducts',(req, res) => {
    addTables.addProductsTable(db)
    if(req.files === null) return res.status(400).json({msg: 'no file uploader'}) 
    const file = req.files.image

    file.mv(`${__dirname}/${pathProduct}/${file.name}`, err => {
      if(err)
        console.error(err);
        return res.status(500).send(err)
    })

    db.query(`
      INSERT INTO products (product_name, price, user_id, category, content, path, is_active) 
      VALUES ('${req.body.productName}','${req.body.price}','${req.body.userId}','${req.body.category}','${req.body.content}','${file.name}', '0')
    `), err => {
      if(err)
        console.error(err)
        return res.status(500).send(err)
    }
    return res.json({ body: req.body , fileName: file.name})
  })

router.get('/createProducts', async (req, res) => {
  db.query('SELECT * FROM products', function(err, result){
    try{  
      return res.json({result}).status(200)
    }catch(err){
      return res.send(500).send("Cannot get all Product", err)
    } 
  })
})

router.get('/createProducts/:id', async (req, res) => {
  db.query(`SELECT * FROM products WHERE user_id = "${req.params.id}"`, function(err, result){
    try{  
      return res.json(result).status(200)
    }catch(err){
      return res.send(500).send(`Cannot get product on user_id = ${req.params.id} `, err)
    } 
  })
})

router.put('/cccc/:id', async (req,res) => {
// PUT


})

router.delete('/createProducts/:id', async (req, res) => {
  de.query(`SELECT * FROM products WHERE user_id = "${req.params.id}"`, function(err, result) {
    try{
      // DELETE
    }catch(err){
      return res.send(500).send(`Cannot delete product on user_id = "${req.params.id}" `, err)
    }
  })
})

module.exports = router