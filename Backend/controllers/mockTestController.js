const db = require("../config/db");

const getMockTests = async (req, res) => {

    try {

        const examId = req.params.examId;

        const [mockTests] = await db.query(
            `SELECT
                mock_id,
                subject_id,
                level,
                duration,
                total_questions
             FROM mock_tests
             WHERE exam_id=?
             ORDER BY
                FIELD(level,'Easy','Moderate','Hard'),
                subject_id`,
            [examId]
        );

        res.json({
            success: true,
            totalMockTests: mockTests.length,
            mockTests
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = { getMockTests };