exports.createProduct=(req,res,next)=>{
    const body=req.body;
    console.log(body);
    res.json({
        message:"Success Add new product",
        body
    })
}

exports.getAllproducts=(req,res,next)=>{
    res.json({
        message:"Success"
    })
}

exports.getProductById=(req,res,next)=>{
    res.json({
        message:"Success"
    })
}

exports.updateProduct=(req,res,next)=>{
    res.json({
        message:"Success"
    })
}

exports.deleteProduct=(req,res,next)=>{
    res.json({
        message:"Success"
    })
}