class CustomError extends Error{
    constructor(code,message,description){
        super(`code: ${code} message: ${message} desription:${description}`)

        this.code=code;
        this.message = message;
        
        
    }
}

module.exports = CustomError 