const express=require('express');
const router=express.Router();
const authmiddleware=require('../middleware/authmiddleware')
const {updatecart,getcart,createorder}=require('../controllers/cartController')
router.post('/updatecart',authmiddleware,updatecart)
router.post("/getcart",authmiddleware,getcart)
router.post("/createorder",authmiddleware,createorder)
module.exports=router
