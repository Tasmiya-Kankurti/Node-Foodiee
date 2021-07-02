const express = require("express")
const app = express()

const phoneAuth = require('./src/routes/phoneAuthRoute')

const port = 3000

app.get('/',(req,res) => {
    res.send("Test")
})

app.use('/api/phoneauth', phoneAuth)

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

// LtEzfvT5_vTJIf2Bnl72B5lTtGHpsQgKH_YZYti5