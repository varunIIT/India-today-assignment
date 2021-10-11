const express=require('express')
const route=express.Router()

route.use('/home-screen',require('./home_screen'))
//route.use('/astrologer-talk-screen',require('./astrologer_talk_screen'))
module.exports=route