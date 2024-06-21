const express=require("express")
const router=express.Router()
const {GoogleGenerativeAI}=require("@google/generative-ai")
require("dotenv").config()
const chatbot=require("../controllers/chatbotController")
router.post("/chat",chatbot)

module.exports=router