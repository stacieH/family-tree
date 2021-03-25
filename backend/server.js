import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import {routes} from './routes'

const app = express()
const PORT = 3020;

mongoose.connect('mongodb://localhost/family-tree')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routes(app)

app.use(express.static('assets'))
app.listen(PORT, ()=>{
    console.log('Server started at localhost:3020')
})