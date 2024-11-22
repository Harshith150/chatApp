import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const isLoggedIn = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
        if(!decoded) return res.status(401).json({ message: 'Access denied. No token provided.' });
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
};

export default isLoggedIn;
