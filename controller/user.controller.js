const User = require('../models/users.model')

const getUsers =  async (req, res)=>{
    try{
        const user = await User.find({})
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const getUser =  async (req, res)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id)
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const updateUser =  async (req, res)=>{
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
}

const deleteUser =  async (req, res)=>{
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
}

const addUser =  async (req, res)=>{
    try{
        console.log(req.body)
        const user = await User.create(req.body);
        res.status(201).json(user);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {getUser, getUsers, updateUser, deleteUser, addUser}