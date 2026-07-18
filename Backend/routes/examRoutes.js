const express = require("express");
const router = express.Router();

const {
    getAllExams,
    searchExam,
    getExamById
} = require("../controllers/examController");

router.get("/", getAllExams);

router.get("/search", searchExam);

router.get("/:id", getExamById);

module.exports = router;