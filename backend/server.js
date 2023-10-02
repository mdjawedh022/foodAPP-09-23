const express=require('express');
const dotenv=require('dotenv').config()
const app=express();
const bodyParser = require('body-parser')
 const products=require('./routes/products')

app.use(express.json());
app.use(bodyParser());
// app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',products)


app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on ${process.env.PORT}`);
})