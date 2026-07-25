const express = require("express");

const router = express.Router();

const multer = require("../../Middleware/Multer");
const{getClasses}= require("../../controllers/School/schoolUploadController")

const {

    uploadPDF,
    getPDF

} = require("../../controllers/School/schoolUploadController");

router.post("/upload", multer.single("pdf"), uploadPDF);

router.get("/get", getPDF);
router.get("/classes", getClasses)

module.exports = router;