const express = require("express");

const router = express.Router();

const {

    searchSchoolPDFs,
    getSchoolPDF

} = require("../../controllers/School/schoolPDFController");
const { getPDFs } = require("../../controllers/School/schoolPDFController");

// Search PDFs
router.get("/search", searchSchoolPDFs);

// Get Single PDF
router.get("/get", getSchoolPDF);

module.exports = router;