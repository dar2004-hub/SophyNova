const db = require("../../config/db");

const getClasses = async (req, res) => {
    try {

        const [rows] = await db.query(
            "SELECT * FROM school_classes ORDER BY class_id"
        );

        res.json({
            success: true,
            classes: rows
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

module.exports = { getClasses };