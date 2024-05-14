const mongoose = require('mongoose')

const connectToMongoDB = async (MONGO_URI) => {
  try {
    const client = await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};


module.exports = {connectToMongoDB}