const express = require("express");

const router = express.Router();

const {

    searchResources

} = require("../controllers/resourceController");

router.get("/search", searchResources);

module.exports = router;