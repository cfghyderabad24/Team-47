const express = require('express');
const router = express.Router();

const {contactusfunction}= require("../controllers/actionController")
router.post("/contactus",contactusfunction)

module.exports=router