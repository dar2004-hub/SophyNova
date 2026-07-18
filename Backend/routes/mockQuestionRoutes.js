const express = require("express");

const router = express.Router();

const {
    getMockQuestions
} = require("../controllers/mockQuestionController");

router.get("/:mockId", getMockQuestions);

module.exports = router;