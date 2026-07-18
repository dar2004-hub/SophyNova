const db = require("../config/db");

const getSubjectsByExam = async (req, res) => {

    try {

        const { exam_id } = req.params;

        const [subjects] = await db.promise().query(

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

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

module.exports = {

    getSubjectsByExam

};