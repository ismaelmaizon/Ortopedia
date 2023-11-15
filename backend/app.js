import 'dotenv/config'
import express from "express";
import router from './src/routes/index.js';
import connectDB from './src/db/connect.js';


const app = express();
connectDB();


app.use(express.json());

app.use('/api', router)


const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log('Escuchando');
})