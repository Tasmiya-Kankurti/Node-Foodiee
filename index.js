const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MONGO_URL = require('./config/').MONGO_URL

const phoneAuth = require('./src/routes/phoneAuthRoute')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false, 
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Successfully connected :)")
}).catch((error)=>{
    console.log(`ERROR: ${error.message}`);
})

const PORT =  process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send("Test")
})

app.use('/api/phoneauth', phoneAuth)

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})
