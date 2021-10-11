const express=require("express")
const route=express.Router()
const homeScreen=require('../controllers/home_screen')
route.get('/banner-offer', homeScreen.bannerOffer)
route.get('/horoscope-list', homeScreen.horoscopeList)
module.exports=route