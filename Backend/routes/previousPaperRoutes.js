const express=require("express");

const router=express.Router();

const {getPreviousPapers}=require("../controllers/previousPaperController");

router.get("/:examId",getPreviousPapers);

module.exports=router;