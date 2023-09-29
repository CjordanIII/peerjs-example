
const express = require('express')
require('dotenv').config()
const jsxEngine = require('jsx-view-engine')
const cors = require('cors')

//*Environment variables
const app = express()
const PORT = process.env.PORT || 3000

//*App Config
app.set('view engine','jsx')
app.engine('jsx',jsxEngine())


//*Middleware 
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())


//*Routes
app.use('/',require('./routes/api-routes'))

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

