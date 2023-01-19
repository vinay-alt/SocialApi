import express from 'express';
import bodyParser from 'body-parser'
import router from './routes/router.js';
import dotenv from 'dotenv'
import Conn from './databases/db.js'
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);


dotenv.config();


const PORT = 3000;
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Conn(username, password);