const Product = require('../models/product')

const getAllProductsStatic=async(req,res)=>{
const products=await Product.find({price:{$gt:30}})
.sort('price')
.select('name price')

res.status(200).json({products,nbHits:products.length})
}

const getAllProducts=()=>{

}

module.exports={
    getAllProductsStatic,
    getAllProducts
}