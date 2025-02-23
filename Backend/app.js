const dotenv = require('dotenv');
dotenv.config();

const express=require('express');
const app = express();
const cors = require('cors');
const cookieParser=require('cookie-parser');
const connectDB=require('./db/db');

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


connectDB();


module.exports =app;