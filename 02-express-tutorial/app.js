
const express=require('express')
const {products} = require("./data");
const productRoute=require('./routes/people')

const app=express()

app.get(('/'),(req,res)=>{
    res.send('Hey home page')
})

app.use('/products',productRoute)

app.get(('/query'),(req,res)=>{
    const {search,limit}=req.query

    if(search){
        console.log('search')
       return res.json(products)
    }

    if(limit){
       return  res.json(products.slice(limit))
    }

   res.json(products)
})

app.listen(5000,()=>{console.log('Listening on 5000')})
