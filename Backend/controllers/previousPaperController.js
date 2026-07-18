const db = require("../config/db");

const getPreviousPapers = async (req, res) => {

    try {

        const examId = req.params.examId;

        const [papers] = await db.promise().query(
            `SELECT
                paper_id,
                year,
                pdf_link
             FROM previous_papers
             WHERE exam_id=?
             ORDER BY year DESC`,
            [examId]
        );

        res.json({
            success: true,
            totalPapers: papers.length,
            papers
        });

    } catch(err){

        console.log(err);

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

}

module.exports={
    getPreviousPapers
}