const express=require('express')
const route=express.Router()
const astrologer_talk_screen=require('../controllers/astrologer_talk')

route.post('/search',astrologer_talk_screen.search_astro)
route.post('/filter',astrologer_talk_screen.filter_astro)
route.get('/sort',astrologer_talk_screen.sort)
module.exports=route