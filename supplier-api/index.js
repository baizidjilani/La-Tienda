const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const confirmRoute = require('./routes/confirmUserOrders');
const productRoute = require('./routes/supplierProduct');
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
app.use('/uploads', express.static('uploads'));

app.use('/api/confirm/order/', confirmRoute);
app.use('/api/products', productRoute);




app.listen(process.env.Port || 4000, ()=>{
    console.log('supplier backend program running');
} );

