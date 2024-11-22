import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

function generateToken(user) {
    try {
        const token = jwt.sign(
            { email: user.email, _id: user._id},
            process.env.JWT_SECRETKEY,
            { expiresIn: '1h' } // Set expiration as 1 hour
        );
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Token generation failed");
    }
}

export default generateToken;
