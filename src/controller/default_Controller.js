const Card_Models = require('../model/Card_Models');
const cardService = require('../services/cardService')
const getDefault = async(req,res)=>{

    const{query} = req
    const result = await cardService.getAllCard(query)



    res.render('index',{
        data:result.result.data,
        currentPage:result.page,
        pages:result.pages


    })

}
const getAbaut = async(req,res)=>{

    res.render('about') 

}
const getAdd = async(req,res)=>{

    res.render('add')
}
module.exports = {getDefault,getAbaut,getAdd}  