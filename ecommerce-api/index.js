const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user'); 
const supplierRoute = require('./routes/supplier');
const authRoute = require('./routes/auth'); 
// const userBankInfoRoute = require('./routes/userBankInfo');
const cartRoute = require('./routes/userCart');
const orderRoute = require('./routes/userOrder');
const cors = require('cors');


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log('Database Connected'))
    .catch((err)=> {
        console.log(err);
    });

app.use(express.json());
app.use(cors());

app.use('/api/auth/', authRoute);
app.use('/api/users/', userRoute); 
app.use('/api/suppliers/', supplierRoute);
app.use('/api/cart/', cartRoute);
app.use('/api/userorders/', orderRoute);



app.listen(process.env.Port || 5000, ()=>{
    console.log('ecommerce backend program running'); 
} );

