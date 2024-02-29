import express from "express";
import {verify} from '../middleWares/verifyToken.js'
import{createProject,getProjects ,getProjectsByUser,deleteProject,updateProject,getProject} from "../controllers/projectsSection.js"
const router = express.Router();
const upload = multer({ dest: 'uploads/' })
import multer from 'multer'


// create a project route
router.post("/", upload.single('image'), createProject);
// GET all Project
router.get("/", getProjects);
//get Project by user (postedBy)
router.get("/postedBy/:postedBy", getProjectsByUser);
//delete a Project by it's ID
router.delete("/:id", deleteProject);
//  Update a Project by it's id
router.patch("/:id", upload.single('image'), updateProject);
// GET a single Project by it's ID
router.get("/:id", getProject);

export default router