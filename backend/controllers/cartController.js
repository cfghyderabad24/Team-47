const user=require("../models/userSchema")
const order=require("../models/orderSchema")
const asyncHandler=require("express-async-handler")
const authmiddleware=require("../middleware/authmiddleware")
//@desc update cart
//@route /api/cart/update
//@access private
const updatecart=asyncHandler(async(req,res,next)=>{
    try{
        const cart=req.body.cart;
        const userdata=req.userdata;
        console.log("updatecart called")
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
        console.log("getcart called")
        const user1=await user.findOne({email:userdata.email})
        res.status(200).send({ok:true,cart:user1.cart})
    }catch(err){
        next(err)
    }})

const createorder=asyncHandler(async(req,res,next)=>{
    try{
        const data=req.body
        const order1=new order({...data.orderdetails});
        await order1.save()
        res.send({ok:true,msg:"successfully created order"})

    }catch(err){
        next(err)
    }
})

const getorder=asyncHandler(async(req,res,next)=>{
    try{
        const order1=await order.findOne({})
        res.ststus(200).send({ok:true,order:order1})
    }catch(err){
        next(err)
    }
})
module.exports={updatecart,getcart,createorder,getorder}
        