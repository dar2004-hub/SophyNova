const db = require("../config/db");

const getNotifications = async (req, res) => {

    try {

        const examId = req.query.examId;

        let sql = `
            SELECT
                notification_id,
                exam_id,
                title,
                description,
                notification_date
            FROM notifications
        `;

        let params = [];

        if (examId) {
            sql += " WHERE exam_id = ?";
            params.push(examId);
        }

        sql += " ORDER BY notification_date DESC";

        const [notifications] = await db.promise().query(sql, params);

        res.json({
            success: true,
            totalNotifications: notifications.length,
            notifications
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
    getNotifications
};