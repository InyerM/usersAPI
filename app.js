require('dotenv').config()
const cors=require("cors")

const { databaseService } = require('./service/database')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

require('./route')(app, databaseService())

app.listen(3001, () => {
    console.log('App listening on port 3001')
})