const Product = require("../models/productSchema");
const cloudinary = require("cloudinary").v2;

exports.createProduct = async (req, res, next) => {
  const body = req.body;
  const productImage = body.productImage;

  const result = await cloudinary.uploader.upload(productImage, {
   'folder': "kfc",
  });

  body.productImage = result.secure_url;

  try {
    await Product.create(body);
    const product = await Product.find({});
    res.json({
      status: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllproducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json({
      status: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.json({
      status: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await Product.findByIdAndUpdate(id, body);
    res.json({
      status: true,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  let id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.json({
      status: true,
      message: "product has been deleted!",
    });
  } catch (error) {
    next(error);
  }
};

// await Product.findByIdAndDelete({_id:id});
// res.status(200).send({"msg":"Note has been deleted"})
// }catch(err){
//   res.status(400).send({"msg":err.message})
// }
