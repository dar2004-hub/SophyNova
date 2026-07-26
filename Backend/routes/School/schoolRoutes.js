const express = require("express");
const router = express.Router();
const multer = require("../../Middleware/Multer");
const {

    getClasses,
    getStreams,
    getSubjects

} = require("../../controllers/School/schoolController");
const {

    uploadPDF

} = require("../../controllers/School/schoolUploadController");
const {
    getPDFs
} = require("../../controllers/School/schoolPDFController");

router.get("/classes", getClasses);
router.get("/subjects/:class_id", getSubjects);
router.get("/subjects", getSubjects);
router.get("/pdfs", getPDFs);

router.post(

    "/upload",

    multer.single("pdf"),

    uploadPDF

);

module.exports = router;