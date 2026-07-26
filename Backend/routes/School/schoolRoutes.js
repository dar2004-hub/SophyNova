const express = require("express");
const router = express.Router();

const multer = require("../../Middleware/Multer");

const {
    getClasses,
    getSubjects
} = require("../../controllers/School/schoolController");

const {
    uploadPDF
} = require("../../controllers/School/schoolUploadController");

router.get("/classes", getClasses);

router.get("/subjects/:class_id", getSubjects);

router.post(
    "/upload",
    multer.single("pdf"),
    uploadPDF
);

module.exports = router;