const db = require("../../config/db");

const uploadBook = async (req, res) => {

    try {

        const { class_id, subject_id, title } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a PDF."
            });
        }

        const pdf_url = req.file.filename;

        await db.query(
            `
            INSERT INTO school_resources
            (class_id, subject_id, resource_type, title, pdf_url)
            VALUES (?, ?, ?, ?, ?)
            `,
            [
                class_id,
                subject_id,
                "Book",
                title,
                pdf_url
            ]
        );

        res.json({
            success: true,
            message: "Book Uploaded Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    uploadBook
};