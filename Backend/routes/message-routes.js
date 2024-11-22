import express from 'express';
import {sendMessage,getMessage} from '../controllers/message-controller.js';
import isLoggedin from '../middlewares/isLogged.js'

const router = express.Router();

router.post('/send/:id',isLoggedin,sendMessage);
router.post('/get/:id',isLoggedin,getMessage);


export default router;   