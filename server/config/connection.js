const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dnd',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB Endpoint')
);

module.exports = mongoose.connection;