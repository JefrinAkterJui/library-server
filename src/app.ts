import express, { Application, Request, Response } from 'express'
import { configDotenv } from 'dotenv'
import router from './app/routes/book.routes'
import cors from 'cors'

configDotenv()
const app : Application = express()
app.use(express.json())
app.use(cors())


app.use("/api/books", router)
app.use('/api/borrow', router)

app.get('/',(req : Request, res : Response)=>{
    res.send("Welcome to Library Management System")
})

export default app