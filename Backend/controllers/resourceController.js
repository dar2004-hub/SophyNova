const db = require("../config/db");

const searchResources = async (req, res) => {
    try {

        const {
            exam_id,
            keyword,
            subject_id,
            resource_type_id
        } = req.query;

        if (!exam_id) {
            return res.status(400).json({
                success: false,
                message: "Exam ID is required."
            });
        }

        let query = `
            SELECT
                r.resource_id,
                r.exam_id,
                r.subject_id,
                r.resource_type_id,
                r.title,
                r.description,
                rt.resource_type_name
            FROM resources r
            INNER JOIN resource_types rt
                ON r.resource_type_id = rt.resource_type_id
            WHERE r.exam_id = ?
        `;

        const values = [exam_id];

        if (keyword) {
            query += ` AND r.title LIKE ?`;
            values.push(`%${keyword}%`);
        }

        if (subject_id) {
            query += ` AND r.subject_id = ?`;
            values.push(subject_id);
        }

        if (resource_type_id) {
            query += ` AND r.resource_type_id = ?`;
            values.push(resource_type_id);
        }

        query += `
            ORDER BY
                rt.resource_type_name,
                r.title
        `;

        const [resources] = await db.query(query, values);

        console.log("Resources from DB:");
        console.table(resources);

        return res.status(200).json({
            success: true,
            resources
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    searchResources
};