const db = require("../config/db");

const getDashboard = async (req, res) => {

    const examId = req.params.id;

    try {

        // Check if examId is provided
        if (!examId) {
            return res.status(400).json({
                success: false,
                message: "Exam ID is required."
            });
        }

        const [exam] = await db.query(
            "SELECT * FROM exams WHERE exam_id = ?",
            [examId]
        );

        // Check if exam exists
        if (exam.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Exam not found."
            });
        }

        const [subjects] = await db.query(
            "SELECT * FROM subjects WHERE exam_id = ?",
            [examId]
        );

        const [resources] = await db.query(
            "SELECT * FROM resources WHERE exam_id = ?",
            [examId]
        );

        const [pdfs] = await db.query(
            "SELECT * FROM pdfs WHERE exam_id = ?",
            [examId]
        );

        const [videos] = await db.query(
            "SELECT * FROM videos WHERE exam_id = ?",
            [examId]
        );

        const [books] = await dbquery(
            "SELECT * FROM books WHERE exam_id = ?",
            [examId]
        );

        const [onlineSources] = await db.query(
            "SELECT * FROM online_sources WHERE exam_id = ?",
            [examId]
        );

        const [mockTests] = await db.query(
            "SELECT * FROM mock_tests WHERE exam_id = ?",
            [examId]
        );

        const [mockQuestions] = await db.query(
            "SELECT * FROM mock_questions WHERE exam_id = ?",
            [examId]
        );

        const [previousPapers] = await db.query(
            "SELECT * FROM previous_papers WHERE exam_id = ?",
            [examId]
        );

        const [notifications] = await db.query(
            "SELECT * FROM notifications WHERE exam_id = ?",
            [examId]
        );

        const [reviews] = await db.query(
            "SELECT * FROM reviews WHERE exam_id = ?",
            [examId]
        );

        res.status(200).json({

            success: true,

            exam: exam[0],

            subjects,

            resources,

            pdfs,

            videos,

            books,

            onlineSources,

            mockTests,

            mockQuestions,

            previousPapers,

            notifications,

            reviews

        });

    } catch (err) {

        console.error("Dashboard Error:", err);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

module.exports = {
    getDashboard
};