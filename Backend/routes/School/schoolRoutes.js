const express = require("express");
const router = express.Router();

const upload = require("../../Middleware/Multer");

const {
    getClasses
} = require("../../controllers/School/schoolClassController");

const {
    getSubjects
} = require("../../controllers/School/schoolSubjectController");

const {
    uploadBook
} = require("../../controllers/School/schoolUploadController");

router.get("/classes", getClasses);

router.get("/subjects/:class_id", getSubjects);

router.post(
    "/upload",
    upload.single("pdf"),
    uploadBook
);

module.exports = router;