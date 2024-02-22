const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI)
const TodoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model("todos",TodoSchema);
module.exports={
    todo
}