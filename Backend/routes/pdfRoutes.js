const express = require("express");

const router = express.Router();

const multer = require("../Middleware/upload");

const {

    uploadPDF,
    getPDF

} = require("../controllers/pdfController");

router.post("/upload", multer.single("pdf"), uploadPDF);

router.get("/get", getPDF);

module.exports = router;