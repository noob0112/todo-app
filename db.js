const mongoose = require("mongoose");
const db = "todolistDB"
const userName = "todoapp"
const password = "todoapp"
const uri = `mongodb+srv://${userName}:${password}@todo-app.omjmi.mongodb.net/${db}?retryWrites=true&w=majority`;

module.exports = async () => {
    try {
        await mongoose.connect(
            uri,
            {
            useNewUrlParser: true,
            useUnifiedTopology:true
            }
        );

        console.log("MongoDB connected");
    } catch (err) {
        console.log("can't connect database \n",err.message);
        process.exit(1);
    }
}