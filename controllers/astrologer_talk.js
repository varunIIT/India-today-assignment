module.exports.search_astro=(req,res)=>{
    try{
        const {name,language,skill}=req.body//extracting name, language and skills to search an astrologer

        let astrologers=require('../dummy_data/astro_details')
        if(name){
            const splitName=name.split(" ")//spliting name by space to get first name and last name
            astrologers=astrologers.filter(astrologer=>astrologer.firstName==splitName[0])//getting all astrologers with some first name

            if(splitName.length>1){//also accounting last name is possible
                astrologers=astrologers.filter(astrologer=>astrologer.lastName==splitName[1])
            }
        }
        if(language){//taking language into account to current set of astrologers if possible i.e if language is not empty
            astrologers=astrologers.filter(astrologer=>astrologer.languages.includes(language))
        }
        if(skill){//taking skill into account to current set of astrologers if possible i.e if skill is not empty
            astrologers=astrologers.filter(astrologer=>astrologer.skills.includes(skill))
        }
        //now astrologers is finally filtered with all non empty constraints applied
        res.status(200).json(astrologers)

     
    }
    catch(err){
        console.log(err)
    }
}
module.exports.filter_astro=(req,res)=>{
    try{
        const {language,skill}=req.body//extracting name, language and skills to search an astrologer

        let astrologers=require('../dummy_data/astro_details')
       
        if(language){//taking language into account to current set of astrologers if possible i.e if language is not empty
            astrologers=astrologers.filter(astrologer=>astrologer.languages.includes(language))
        }
        if(skill){//taking skill into account to current set of astrologers if possible i.e if skill is not empty
            astrologers=astrologers.filter(astrologer=>astrologer.skills.includes(skill))
        }
        //now astrologers is finally filtered with all non empty constraints applied
        res.status(200).json(astrologers)
    }
    catch(err){
        console.log(err)
    }
}
module.exports.sort=(req,res)=>{
    try{
        let astrologers=require('../dummy_data/astro_details')
        astrologers.sort(function(a, b) {
            return parseFloat(a.additionalPerMinuteCharges) - parseFloat(b.additionalPerMinuteCharges);
        });
        res.status(200).json(astrologers)
    }
    catch(err){
        console.log(err);
    }
}