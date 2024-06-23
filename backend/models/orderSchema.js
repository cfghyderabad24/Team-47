const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    id: {type:String,
        required:true
    },
    
    status: {
        type:String,
        default:"processing"
    },
    items: {
        type:Array,
        required:true
    }
})

const order=mongoose.model('order',orderSchema)
module.exports=order;