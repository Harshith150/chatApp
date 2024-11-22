import dotenv from 'dotenv'
import express  from 'express'
import morgan from 'morgan'
import db_connect from './config/db-connection.js'
import userRouter from './routes/user-routes.js'
import messageRouter from './routes/message-routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
db_connect()
const app = express()



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',  // Frontend origin
    credentials: true                 // Allow cookies
}));


//routes
app.get("/",(req,res)=>{
    res.send("hello")
})

app.use('/api/user',userRouter)
app.use('/api/message',messageRouter)



const port = process.env.PORT || 5000;

app.listen(3000,()=>{
    console.log(`Server is running on port  http://localhost:${port }`)
})