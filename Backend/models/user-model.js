import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name : {
            type :String,
            require:true
        },
        email :{
            type : String,
            require:true,
            unique : true,
            lowercase: true
        },
        password : {
            type : String,
            require:true
        }
    },
    {
        timestamps : true
    }
)

const userModel = mongoose.model('User',userSchema)
export default userModel;