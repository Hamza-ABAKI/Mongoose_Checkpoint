const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connection to Data Base succeeded'))
    .catch(() => console.log('Fail to connect to Data Base'))
}

module.exports = connectDB
