const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const transactionRoute = require('./routes/transaction');
const bankCardHolderRoute = require('./routes/bankCardHolder');
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

app.use('/api/bank/', bankCardHolderRoute);
app.use('/api/userbalance/', userBalanceRoute);
app.use('/api/transaction', transactionRoute);


app.listen(process.env.Port || 7000, ()=>{
    console.log('bank-api backend program running'); 
} );

