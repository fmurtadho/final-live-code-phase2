const express  = require('express')
// const routes   = require('./routes')

//ROUTES REQUIRE
const userRoutes = require('./routes/users')

const mongoose = require('mongoose')
const cors     = require('cors')
require('dotenv').config()
const app = express()

mongoose.connect(process.env.MY_LOCAL_MONGODB, { useNewUrlParser: true });
// mongoose.connect(process.env.MY_MLAB_MONGODB, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo failed to connect:'));
db.once('open', function() {
  console.log('mongo connected')
});

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())

//ROUTES
app.use('/users',userRoutes)

app.listen(process.env.port, function(){
    console.log('Listening on port', process.env.port)
})

module.exports = app;