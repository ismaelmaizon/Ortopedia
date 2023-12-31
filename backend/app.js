import 'dotenv/config'
import express from "express";
import router from './src/routes/index.js';
import connectDB from './src/db/connect.js';
import cors from 'cors';

const app = express();
connectDB();


app.use(express.json());
app.use(cors()) // al ajecutar cors de esta manera, pemitimos que cualquier dominio pueda hacer consulta a nuestro backend
app.use('/api', router)


const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log('Escuchando');
})