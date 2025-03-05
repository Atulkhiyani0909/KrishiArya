const dotenv = require('dotenv');
dotenv.config();

const express=require('express');
const app = express();
const cors = require('cors');
const cookieParser=require('cookie-parser');
const connectDB=require('./db/db');
const farmerRoutes=require('./Routes/farmer.routes');
const userRoutes=require('./Routes/user.routes');
const orderRoutes=require('./Routes/order.routes');

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


connectDB();


app.use('/farmers',farmerRoutes);
app.use('/user',userRoutes);
app.use('/order',orderRoutes);
module.exports =app;