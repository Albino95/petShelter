const mongoose = require('mongoose');

const dbName = ('projectDatabase')

mongoose.connect('mongodb://localhost/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then((res) => {
        console.log("You are connected to " + dbName)
    })
    .catch((err) => {
        console.log("you cannot connect to database because: " + err)
    })