import userModel from '../models/user-model.js';
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js';
import dotenv from 'dotenv'
dotenv.config()

const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already exists" });

        const hashed_password = await bcrypt.hash(password,10)
        const newUser = await userModel.create({ name , email, password :hashed_password});
        const token = generateToken(newUser)
        res.cookie("token", token);
        return res.status(201).json({ message: "User created successfully", user: {
            email:newUser.email,
            name : newUser.name,
            _id : newUser._id
        } });
    } catch (err) {
        console.error("Error in user signup:", err);
        return res.status(500).json({ message: "Server error, please try again later" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(existingUser);
        res.cookie("token", token );
        return res.status(200).json({ message: "Logged in successfully", user: {email:existingUser.email,name:existingUser.name,_id:existingUser._id} });
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Login error, something went wrong" });
    }
};

const logout = (req,res)=>{
    try
    {
        res.clearCookie('token')
        res.status(200).json({message : 'user logged out successfully'})
    }
    catch(err)
    {
        res.status(500).json({message:'Server error'})
    }
}
const getUserProfile = async (req, res) => {
    try {
        const loggedInUser = req.user;
        const filteredUsers = await userModel.find({email: { $ne: loggedInUser.email } }).select("-password");
        res.status(200).json({ users: filteredUsers });
    } catch (err) {
        console.error("Error fetching user profiles:", err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


export {signup,login,logout,getUserProfile}

