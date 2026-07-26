const db = require("../../config/db");

// ======================================================
// Get All Classes
// ======================================================

const getClasses = async (req, res) => {

    try {

        const [classes] = await db.query(`
            SELECT class_id, class_name
            FROM school_classes
            ORDER BY class_id
        `);

        return res.json({

            success: true,
            classes

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,
            message: err.message

        });

    }

};

// ======================================================
// Get Streams
// ======================================================

const getStreams = async (req, res) => {

    try {

        const { class_id } = req.params;

        const [streams] = await db.query(

            `
            SELECT DISTINCT stream
            FROM school_subjects
            WHERE class_id=?
            ORDER BY stream
            `,

            [class_id]

        );

        return res.json({

            success:true,
            streams

        });

    }

    catch(err){

        return res.status(500).json({

            success:false,
            message:err.message

        });

    }

};

// ======================================================
// Get Subjects
// ======================================================
const getSubjects = async (req, res) => {
    try {

        const { class_id } = req.params;

        const [subjects] = await db.query(
            `SELECT subject_id, subject_name
             FROM school
             WHERE class_id = ?
             ORDER BY subject_name`,
            [class_id]
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
module.exports={

    getClasses,
    getStreams,
    getSubjects

};