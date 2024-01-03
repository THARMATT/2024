const express = require('express')
const app = express()

const cors=require('cors');
app.use(cors())
const {createTodo,updateTodo}=require('./types.js')
const { todo } = require('./db.js')
app.use(express.json())

//title
//description
app.post("/todo",async function(req,res){
   const createPayLoad= req.body;
   const parsePayLoad= createTodo.safeParse(createPayLoad);
   if(!parsePayLoad.success){
    res.status(411).json({
        msg:"Invalid inputs"
    })
    return;
   }
await todo.create({
    title:createPayLoad.title,
    description:createPayLoad.description,
    completed:false
})
res.json({
    msg:"todo created"
})

})
app.get("/todos",async function(req,res){
const todos= await todo.find({

})
res.json({
    todos
})
})
app.put("/completed",async function(req,res){
const updatePayLoad=req.body;
const parsePayLoad=updateTodo.safeParse(updatePayLoad);
if(!parsePayLoad.success){
    res.status(411).json({
        msg:"Invalid inputs"
    })
    return;
}
await todo.update({
    _id:req.body.id
},
{
    completed:true
})
res.json({
    msg:"Todo marked as Done"
})
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});