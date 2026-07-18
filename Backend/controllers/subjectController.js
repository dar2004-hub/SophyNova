const db = require("../config/db");
console.log("🚀 Subject Controller Loaded");
const getSubjectsByExam = async (req, res) => {
    try {console.log("Exam ID:", req.params.exam_id);
        const { exam_id } = req.params;

        const [subjects] = await db.query(
            `
            SELECT
                subject_id,
                subject_name
            FROM subjects
            WHERE exam_id = ?
            ORDER BY subject_name
            `,
            [exam_id]
        );

        res.json({
            success: true,
            subjects
        });

    } catch (err) {
    console.error("===== SUBJECT CONTROLLER ERROR =====");
    console.error(err);
    console.error(err.stack)

    return res.status(500).json({
        success: false,
        message: err.message
    });
}
};

module.exports = {
    getSubjectsByExam
};