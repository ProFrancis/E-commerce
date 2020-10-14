const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const fileUpload = require('express-fileupload');

const routes = require('./routes')

app.use (express.json())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(fileUpload());
app.use('/', routes)

app.listen(port, () => console.log(`listening at http://localhost:${port}`))