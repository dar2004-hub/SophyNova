const db = require("../config/db");

const searchResources = async (req, res) => {

    try {

        const { exam_id, keyword } = req.query;

        if (!exam_id || !keyword) {

            return res.status(400).json({

                success: false,
                message: "Exam and keyword are required."

            });

        }

        const search = `%${keyword}%`;

        const [resources] = await db.promise().query(

            

            `
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

            WHERE

                r.exam_id = ?
            AND
                r.title LIKE ?

            ORDER BY
                rt.resource_type_name,
                r.title
            `,

            
            [exam_id, search]
            

        );

        console.log("Resources from DB:");
        console.table(resources);

        return res.status(200).json({

            success: true,

            resources

        });

    }

    catch (err) {

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