const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const route = require("./routes/index.js");
const app = express();

connectDB()

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

const PORT = 3000;

route(app)

app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`)
})