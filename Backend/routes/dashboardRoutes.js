const express = require("express");
const router = express.Router();

const { getDashboard } = require("../controllers/dashboardController");

router.get("/:id", getDashboard);

module.exports = router;