import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerUser = async(req, res) => {
    const {name, email, password} = req.body;
    const existingUser = await User.findOne({email});

    if (existingUser){
        return res.status(400).json({message: "User already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({name, email, password: hashedPassword});
    
    res.status(201).json({message: "User registered successfully", userId: newUser._id});
};

export const loginUser = async(req, res) => {
    const{email, password} = req.body;
    const user = await User.find({email});

    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(200).json({message: "Invalid credentials"});
    }
    
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
    res.json({token, user});
}