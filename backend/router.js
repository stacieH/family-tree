import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = 3020;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('assets'))
app.listen(PORT, ()=>{
    console.log('Server started at localhost:3020')
})