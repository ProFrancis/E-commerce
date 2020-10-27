const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
// const bodyParser = require('body-parser')


const routes = require('./routes')

// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(cors())
app.use('/', routes)

app.listen(port, () => console.log(`listening at http://localhost:${port}`))