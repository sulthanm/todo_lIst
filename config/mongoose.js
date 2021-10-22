const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true});


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo-list',
    { 
        useNewUrlParser: true ,
        useUnifiedTopology: true
    
    }
);
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function() {
    console.log("db running succesfully");
});

 module.exports = db;
