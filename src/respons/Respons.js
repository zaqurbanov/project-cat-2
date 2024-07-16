
const CustomError = require("./CustomError")

class Response {
    constructor(){}


    static success(data,code=200){
        return{

            code : code,
            success:true,
            data :data,
            
        }

        
    }

    static error(error,code=400){
        if(error instanceof CustomError){
                return{
                    
                        
                        code:error.code,
                        message:error.message,
                        success:false
                    
                }

        }
        else{
            return{
                
                code,
                message:error.message,
                success:false
            }

        }

            
    }
    

}

module.exports = Response