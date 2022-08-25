const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user'); 
const authRoute = require('./routes/auth'); 
const userBankInfoRoute = require('./routes/userBankInfo');
const productRoute = require('./routes/supplierProduct');
const cartRoute = require('./routes/userCart');
const orderRoute = require('./routes/userOrder');
const bankCardHolderRoute = require('./routes/bankCardHolder');
const transactionRoute = require('./routes/transaction');
const userBalanceRoute = require('./routes/userBalance');
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
app.use('/api/products', productRoute);
app.use('/api/userbankinfos/', userBankInfoRoute);
app.use('/api/cart/', cartRoute);
app.use('/api/userorders/', orderRoute);
app.use('/api/bank/', bankCardHolderRoute);
app.use('/api/transaction', transactionRoute);
app.use('/api/userbalance/', userBalanceRoute);

app.listen(process.env.Port || 5000, ()=>{
    console.log('backend program running'); 
} );

