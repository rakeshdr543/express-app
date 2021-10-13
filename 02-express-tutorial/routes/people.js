const express=require('express')
const {products} = require("../data");
const router=express.Router()

router.get('/',(req,res)=>{
    return res.status(200).json(products)

})

module.exports = router