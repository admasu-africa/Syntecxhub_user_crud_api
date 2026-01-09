const express = require("express");
const mongoose = require("mongoose");
const User = require('./models/users.model');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({message: "Hello this is from admasu endpoint"});
});

app.get('/api/users', async (req, res)=>{
    try{
        const user = await User.find({})
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/api/user/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id)
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.put('/api/user/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body)

        if(!user){
            res.status(404).json({message: "user not found"})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.delete('/api/user/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id)

        if(!user){
            res.status(404).json({message: "user not found"})
        }

        res.status(200).json({message: "User deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/api/users', async (req, res)=>{
    try{
        console.log(req.body)
        const user = await User.create(req.body);
        res.status(201).json(user);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

mongoose
  .connect("mongodb://127.0.0.1:27017/Syntecxhub")
  .then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => {
      console.log("server is running on port 3000........");
    });
  })
  .catch(() => {
    console.error("Error while connecting to db");
  });
