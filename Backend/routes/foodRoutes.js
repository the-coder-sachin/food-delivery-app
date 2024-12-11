import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodControllers.js";
import multer from "multer";
import fs from "fs";
import path from "path";
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}


const foodRouter = express.Router();


// image storage engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({storage:storage})

foodRouter.post('/add', upload.single("image"), addFood)
foodRouter.get('/list', listFood)
foodRouter.post('/remove', removeFood)

export default foodRouter;