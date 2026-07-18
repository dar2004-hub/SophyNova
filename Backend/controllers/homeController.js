const db = require("../config/db");

const getHome = async (req, res) => {

    try {

        const [featuredExams] = await db.query(
            "SELECT exam_id, exam_name, organization, category FROM exams LIMIT 8"
        );

        const [resources] = await db.query(
            "SELECT * FROM resources LIMIT 8"
        );

        const [books] = await db.query(
            "SELECT * FROM books LIMIT 8"
        );

        const [videos] = await db.query(
            "SELECT * FROM videos LIMIT 8"
        );

        const [mockTests] = await db.query(
            "SELECT * FROM mock_tests LIMIT 8"
        );

        res.json({
            success: true,
            featuredExams,
            resources,
            books,
            videos,
            mockTests
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getHome
};