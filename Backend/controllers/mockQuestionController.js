const db = require("../config/db");

const getMockQuestions = async (req, res) => {

    try {

        const mockId = req.params.mockId;

        const [questions] = await db.promise().query(
            `SELECT
                question_id,
                question,
                option_a,
                option_b,
                option_c,
                option_d,
                correct_answer,
                explanation
             FROM mock_questions
             WHERE mock_id = ?`,
            [mockId]
        );

        res.json({
            success: true,
            totalQuestions: questions.length,
            questions
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getMockQuestions
};