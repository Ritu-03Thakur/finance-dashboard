import {Router} from 'express';
import KPI from '../models/KPI.model.js';
const router = Router();
router.get('/kpis',async(req,res)=>{
try {
    const kpis = await KPI.find({});
    res.status(200).json(kpis);
} catch (error) {
    console.log(error.message)
    res.status(404).json({message: error.message})
}
})

export default router;