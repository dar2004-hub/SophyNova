const db = require("../../config/db");

const uploadBook = async (req, res) => {

    try {

        const [existing] = await db.query(
    `
    SELECT book_id
    FROM school_resources
    WHERE class_id = ?
      AND subject_id = ?
      AND title = ?
      AND resource_type = 'Book'
    `,
    [class_id, subject_id, title]
);

if (existing.length > 0) {
    return res.status(409).json({
        success: false,
        message: "This book already exists."
    });
}

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