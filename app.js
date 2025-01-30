import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import connect from "./db/db.js";
import userRoutes from './routes/user.routes.js'
// import server from './server.js'

connect()

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users', userRoutes)


app.get("/", (req,res) => {
    res.send("Hello!")
})

export default app;