import express from "express"
import {signup,login,logout, getUserProfile} from '../controllers/user-controller.js'
import isLoggedIn from "../middlewares/isLogged.js"
const router = express.Router()


router.post("/signup",signup)
router.post("/login",login)
router.post('/logout',logout)
router.get('/getUserProfile',isLoggedIn,getUserProfile)
export default router