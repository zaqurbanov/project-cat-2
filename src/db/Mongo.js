
const mongoose = require('mongoose');

class Mongo{
    constructor(){
        this.connected = null
    }

    static async connect (path){

        try {
            console.log("Connecting...");

        const db = await mongoose.connect(path);
        this.connected = db

        console.log("Connected");    
        } catch (error) {
                console.log(error.message);
                console.log("Connected failed");
        }
        
    }
}

module.exports = Mongo