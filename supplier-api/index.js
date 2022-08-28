const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const supplierRoute = require('./routes/supplier');
const productRoute = require('./routes/supplierProduct');
const cors = require('cors');
// const { collection } = require('../ecommerce-api/models/UserCart');


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log('Database Connected'))
    .catch((err)=> {
        console.log(err);
    });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// app.use('/api/suppliers/', supplierRoute);
app.use('/api/products', productRoute);




app.listen(process.env.Port || 4000, ()=>{
    console.log('supplier backend program running');
} );

