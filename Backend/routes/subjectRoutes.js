const express = require("express");
const router = express.Router();

const {
    getSubjectsByExam,
    searchSubjects
} = require("../controllers/subjectController");

// Put this FIRST
router.get("/search", searchSubjects);

// Put this AFTER
router.get("/:exam_id", getSubjectsByExam);

module.exports = router;