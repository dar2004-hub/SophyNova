const express = require("express");

const router = express.Router();

const { getMockTests } = require("../controllers/mockTestController");

router.get("/:examId", getMockTests);

module.exports = router;