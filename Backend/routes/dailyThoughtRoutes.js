const express = require("express");
const router = express.Router();

const { getDailyThought } = require("../controllers/dailyThoughtController");

router.get("/", getDailyThought);

module.exports = router;