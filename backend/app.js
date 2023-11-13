import 'dotenv/config'
import express from "express";
import router from './src/routes/index.js';
import connectdb from './src/db/connect.js'


const app = express();
connectdb();

app.use('/api', router)

const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log('Escuchando');
})