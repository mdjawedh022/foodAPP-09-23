const express=require('express');
const  router=express.Router();
const {createProduct,getAllproducts,getProductById,updateProduct,deleteProduct}=require ( '../controllers/productController')

router.route('/product/new').post(createProduct);
router.route('/product/all').post(getAllproducts);
router.route('product/:id').post(getProductById);
router.route('product/update/:id').post(updateProduct);
router.route('/product/delete/:id').post(deleteProduct);


module.exports=router;