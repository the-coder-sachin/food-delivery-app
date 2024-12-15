import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";

const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// login 
const loginUser = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({ email });
        // check if user exist
        if (!user) {
          return res.json({ success: false, message: `this user doesn't exist` });
        }
        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success:false, message:`The password is incorrect`})
        }

        const token = createToken(user._id);
        return res.json({success:true, token})

    } catch (error) {
        console.log(`errrrr`);
        
        console.log(error);
        return res.json({success:false, message:`something went wrong please check the console`})
    }
}

// register
const registerUser = async (req, res)=>{
    const {name, email, password} = req.body;
    console.log(name, email, password);
    
    // check if entered email has already been used before?
    try {
        const user = await userModel.findOne({email});
        if(user){
            return res.json({success:false, message:`this email has already been used, please use a different email`})
        }
        // validating email & password
        if(!validator.isEmail(email)){
            return res.json({success:false, messgae: `please provide a valid email`})
        }
        if(password.length<8){
            return res.json({success:false, messgae:`please enter a strong password of atleast 8 digits`})
        }
        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create user
        const createNewUser = new userModel({
            name,email,password:hashedPassword
        });

        // save user
        const createdUser = await createNewUser.save();
        if(createdUser){
            console.log(`user created`);
            
        }

        const token = createToken(createdUser._id);
        return res.json({success:true, token})
    } catch (error) {
        console.log(error);
        return res.json({success:false, message:'error catch'})
    }
}

export {loginUser, registerUser}