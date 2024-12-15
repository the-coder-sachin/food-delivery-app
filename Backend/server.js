import express from "express";
import cors from "cors";
import { connectMongoDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config"
import multer from "multer";

const upload = multer()

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(upload.none())
// db connection
connectMongoDB();

// API endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))

app.use('/api/user', userRouter)

app.get('/', (req, res)=>{
    res.send('API WORKING')
});

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})

//mongodb+srv://asynccodersachin:<db_password>@cluster0.xptk7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
