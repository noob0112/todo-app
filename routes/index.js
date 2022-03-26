const taskRouter = require('./task.js');

function route(app){
    app.use("/api/tasks", taskRouter)
}

module.exports = route;