const express=require("express")
const route=express.Router()
const homeScreen=require('../controllers/home_screen')

route.get('/banner-offer', homeScreen.bannerOffer)
route.get('/horoscope-list', homeScreen.horoscopeList)
route.get('/astrologer-details',homeScreen.astroDetails)
route.get('/reports',homeScreen.reports)
route.get('/question-categories',homeScreen.questions)
module.exports=route