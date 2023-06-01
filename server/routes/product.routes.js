import {Router} from 'express';
import Product from '../models/Product.model.js';
const router = Router();

router.get('/products',async(req,res)=>{
try {
    const products = await Product.find({});
    res.status(200).json(products);
} catch (error) {
    console.log(error.message)
    res.status(404).json({message: error.message})
}
})

export default router;
