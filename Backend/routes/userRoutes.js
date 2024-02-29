import express from "express";
import{loginUser,register} from "../controllers/userSection.js"
import {verify} from '../middleWares/verifyToken.js'
import{createProject} from "../controllers/projectsSection.js"
const router = express.Router();



// Login route
router.post("/login", loginUser);

// Signup route
router.post("/signup", register);



export default router
