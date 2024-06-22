const express=require('express');
const router=express.Router();
const authmiddleware=require('../middleware/authmiddleware')
const {updatecart,getcart}=require('../controllers/cartController')
router.post('/updatecart',authmiddleware,updatecart)
router.post("/getcart",authmiddleware,getcart)
module.exports=router
