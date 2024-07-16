const mongoose = require('mongoose');
const CustomError = require('../respons/CustomError');
const Response = require('../respons/Respons');
const Card_Models = require('../model/Card_Models');
const path = require('path');
const fs = require('fs')
const addCard = async (data)=>{
    const {title,description} = data
    

    try {
        if(!title || !description || title ==""|| description=="" ){
           Response.error("required all filed",401);
        }    

          const newData = await Card_Models.create(data);
         const result = Response.success(newData,200);
            return result
        
    } catch (error) {
             throw new CustomError(402,"","test")
    }
}

const getAllCard = async(query)=>{
    try {
        const page = query.page || 1;
        const perPage = 2;

        const totalCard = (await Card_Models.find({})).length
        
        
        const data  = await Card_Models.find().sort("-createdAt").skip((page-1)*perPage).limit(perPage); 
         
        const result = Response.success(data,200)
        return {
            result,
            page,
            pages:Math.ceil(totalCard/perPage),
            
         }
    } catch (error) {
        throw new CustomError(402,"Error")
    }
}

const cardById = async(id)=>{
    try {
        if(!id || id==""|| id.lenght<1){
         return Response.error("Id not found",401)
        }
        const data = await Card_Models.findById(id);
            
        if(!data){
            return Response.error("Id not foundl';l'l';l",402)

        }
        
         const result  = Response.success(data,200);
        
         return result
         

    } catch (error) {
        throw new CustomError(401,error.message)
    }
 
}  
  
const updateCardById = async(editedData)=>{
    const{id,title,description} = editedData
    try {
        
        let editedTitle, editedDescription
        const data = await Card_Models.findById(id);
        if(!data)
            return Response.error("Id not found",401);

        editedTitle = title==data.title ? data.title : title;
        editedDescription = description == data.description ? data.description : description;

        const result  = Card_Models.findByIdAndUpdate(data._id,{
            title:editedTitle,
            description:editedDescription
        })
        if(!result)
            Response.error("Updated Failed",403);

        return result
     
    } catch (error) {
        
    }
} 

const deleteCardById = async(id)=>{
    
    try {
        const data = await Card_Models.findById(id);
        if(!data)
            Response.error("Data Not Found",500);

        const imagePath = path.join(__dirname,'..','public',data.photo);
        fs.unlinkSync(imagePath);
        
       
        

        const removedData = await Card_Models.findByIdAndDelete(id);
        if(!removedData){
            Response.error("deleted invalid",501);

        }

        const result = Response.success("Removed Successfully",200);
        return result
    } catch (error) {
    throw new CustomError(400,error.message)        
    }

}
module.exports = { 
    addCard, 
    getAllCard,
    cardById,
    updateCardById,
    deleteCardById
}