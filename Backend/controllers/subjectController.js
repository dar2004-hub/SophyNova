const db = require("../config/db");

//------------------------------------------------------------------- Get all subjects of an exam--------------------------------------------
const getSubjectsByExam = async (req, res) => {

    try {

        const { exam_id } = req.params;


        const [subjects] = await db.query(
            `
            SELECT subject_id, subject_name
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

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// --------------------------------------------------Search subjects-----------------------------------------------------------------------
const searchSubjects = async (req, res) => {

    try {
const { exam_id, keyword } = req.query;


const [subjects] = await db.query(
    `
    SELECT subject_id, subject_name
    FROM subjects
    WHERE exam_id = ?
    AND subject_name LIKE ?
    ORDER BY subject_name
    `,
    [Number(exam_id), `%${keyword}%`]

);
        res.json({
            success: true,
            subjects
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getSubjectsByExam,
    searchSubjects
};