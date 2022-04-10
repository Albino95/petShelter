const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000"
}))


require('./config/mongoose.config');

require('./routes/pirate.routes') (app);

app.listen(8000, ()=> {console.log("you are connected to port 8000")});