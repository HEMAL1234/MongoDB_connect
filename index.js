const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-students', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connect to MongoDB Successfully!"))
    .catch(err => console.error("Connection Failed!!"));