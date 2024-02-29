import { fileURLToPath } from "url";
import path from "path";
import express from "express";
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// images route
router.get("/:image", (req, res) => {
    res.sendFile(path.resolve(__dirname, `../uploads/${req.params.image}`));
    // path.resolve will create an abselute path to the requested file witch is located in the /oploads then 
    // sendfile, will send the file in a response to the client so we can view it
  });
  
 export default router
