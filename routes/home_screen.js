const express=require("express")
const route=express.Router()
const {bannerOffer}=require('../controllers/home_screen')

route.get('/banner-offer',bannerOffer)
module.exports=route