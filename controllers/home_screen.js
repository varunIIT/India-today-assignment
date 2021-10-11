const { connected } = require('process')

module.exports.bannerOffer = (req, res) => {
    try {
        //get an array of banner offer data
        const bannerOfferData = require('../dummy_data/banner_offer')
        res.status(200).json({
            "httpStatus": "OK",
            "httpStatusCode": 200,
            "success": true,
            "message": "Banners fetched successfully",
            "apiName": "Fetch Banner",
            "data": bannerOfferData
        })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.horoscopeList = (req, res) => {
    try {
        const horoscopeList = require('../dummy_data/horoscope_list')
        res.status(200).json({
            "httpStatus": "OK",
            "httpStatusCode": 200,
            "success": true,
            "message": "fetched successfully",
            "apiName": "Get all daily horoscopes",
            "data": horoscopeList
        })
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.astroDetails = (req, res) => {
    try {
        const astroDetails = require('../dummy_data/astro_details')
        res.status(200).json({
            "httpStatus": "OK",
            "httpStatusCode": 200,
            "success": true,
            "message": "fetched successfully",
            "apiName": "Get all astrologers",
            "data": astroDetails
        })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.reports = (req, res) => {
    try {
        const reportData = require('../dummy_data/report')
        res.status(200).json({
            "httpStatus": "OK",
            "httpStatusCode": 200,
            "success": true,
            "message": "Services fetched successfully.",
            "apiName": "Get all services.",
            "data": reportData
        })
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.questions = (req, res) => {
    try {
        const questions = require('../dummy_data/questions')
        res.status(200).json({
            "httpStatus": "OK",
            "httpStatusCode": 200,
            "success": true,
            "message": "Question categories fetched successfully.",
            "apiName": "Get all categories.",
            "data": questions
        })
    }
    catch (err) {
        console.log(err)
    }
}