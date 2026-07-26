const db = require("../../config/db");

// ======================================================
// Get PDFs by Subject
// ======================================================

const getPDFs = async (req, res) => {

    try {

        const { subject_id } = req.query;

        if (!subject_id) {

            return res.status(400).json({

                success: false,
                message: "Subject ID is required."

            });

        }

        const [pdfs] = await db.query(

            `
            SELECT

                pdf_id,
                pdf_title,
                pdf_url,
                uploaded_by

            FROM school_pdfs

            WHERE subject_id = ?

            ORDER BY pdf_title
            `,

            [subject_id]

        );

        return res.status(200).json({

            success: true,

            pdfs

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

    getPDFs

};