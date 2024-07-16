
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT:process.env.PORT,
    MONGO_PATH:process.env.MONGO_PATH
}