const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


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

module.exports = router