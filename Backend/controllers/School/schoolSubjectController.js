const db = require("../../config/db");
const getSubjects = async (req, res) => {

    const { class_id } = req.params;

    console.log("Class ID:", class_id);

    const [rows] = await db.query(
        `
        SELECT subject_id, subject_name
        FROM school_subjects
        WHERE class_id = ?
        `,
        [class_id]
    );

    console.log(rows);

    res.json({
        success: true,
        subjects: rows
    });

};

module.exports={getSubjects};