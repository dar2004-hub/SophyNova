const express = require("express");

const router = express.Router();

const {

    getSubjectsByExam

} = require("../controllers/subjectController");

router.get("/:exam_id", getSubjectsByExam);

module.exports = router;