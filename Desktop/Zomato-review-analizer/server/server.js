const express = require('express')
const dotenv = require('dotenv')
const { scrape } = require('./scraper')
const cors = require("cors");


const app = express()
dotenv.config()


app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json())


const port = process.env.PORT_NUMBER || 8000

app.post('/api/summary', scrape)

app.listen(port,console.log(`server started at ${port}`))