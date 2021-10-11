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