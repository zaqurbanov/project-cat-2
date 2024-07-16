
const express = require('express');
const cardService = require('../services/cardService');
const path = require('path')
const Response = require('../respons/Respons');
const Card_Models = require('../model/Card_Models');

const addCard = async(req,res)=>{
    const {title,description} = req.body;
    let sampleFile;
    let uploadPath;

    sampleFile  = req.files.image;
    uploadPath = path.join(__dirname,'..','public','upload',`${sampleFile.name}`);
    const imgname = `/upload/${sampleFile.name}${Date.now()}`
    
    
    sampleFile.mv(uploadPath)
    const data = {
        title,
        description,
        photo:`/upload/${sampleFile.name}`
    }
    const result = await cardService.addCard(data);
       if(result.success){
        
        res.redirect('/')
       }
    


} 
 
const getSimpleCardById = async(req,res)=>{

    const {id} = req.params
const result = await cardService.cardById(id)
  
    if(result.success){
        res.render('photo',{data:result.data})
    }else{
        res.redirect('/')

    }
 
} 


const getSimpleEditedPage = async (req,res)=>{

    
    const {id} = req.params;
    const card = await cardService.cardById(id);
    if(card.success){

        res.render('edit',{card:card.data})

    }
    
}
const updateCardById = async(req,res)=>{
    const {id} = req.params;
    const {title,description} = req.body;
    const editedData = {
        title,
        description,
        id
    }
    
    const editedCard = await cardService.updateCardById(editedData)
    if(editedCard){
        res.redirect('/')
    }

     

}

const deleteCardById = async (req,res)=>{
    
  const {id} = req.params;
    const result = await cardService.deleteCardById(id);

    if(result.success){
        res.redirect('/')
    }

}
module.exports = {
    addCard,
    getSimpleCardById,
    updateCardById,
    getSimpleEditedPage,
    deleteCardById
}