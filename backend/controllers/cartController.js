const user=require("../models/userSchema")
const asyncHandler=require("express-async-handler")
const authmiddleware=require("../middleware/authmiddleware")
//@desc update cart
//@route /api/cart/update
//@access private
const updatecart=asyncHandler(async(req,res,next)=>{
    try{
        const cart=req.body.cart;
        const userdata=req.userdata;
        const user1=await user.findOne({email:userdata.email})
        user1.cart=[...cart];
        console.log(await user1.save())
        res.status(200).send({ok:true,msg:"cart updated successfully"})
    }catch(err){
        next(err)
    }
})

const getcart=asyncHandler(async(req,res,next)=>{
    try{
        const userdata=req.userdata;
        const user1=await user.findOne({email:userdata.email})
        res.status(200).send({ok:true,cart:user1.cart})
    }catch(err){
        next(err)
    }})
module.exports={updatecart,getcart}
        