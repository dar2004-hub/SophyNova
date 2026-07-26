const db = require("../../config/db");
const supabase = require("../../config/supabase");

// ======================================================
// Upload School PDF
// ======================================================

const uploadPDF = async (req, res) => {

    try {

        console.log("BODY :", req.body);
        console.log("FILE :", req.file);

        const {

            class_id,
            subject_id,
            pdf_title,
            uploaded_by

        } = req.body;

        // ---------------- Validation ----------------

        if (!class_id || !subject_id || !pdf_title) {

            return res.status(400).json({

                success: false,
                message: "Please fill all required fields."

            });

        }

        if (!req.file) {

            return res.status(400).json({

                success: false,
                message: "Please choose a PDF."

            });

        }

        // ---------------- Subject Exists ----------------

        const [subject] = await db.query(

            `
            SELECT *
            FROM school_subjects
            WHERE subject_id=?
            LIMIT 1
            `,

            [subject_id]

        );

        if (subject.length === 0) {

            return res.status(404).json({

                success: false,
                message: "Subject not found."

            });

        }

        // ---------------- Upload to Supabase ----------------

        const fileName =
            `${Date.now()}-${req.file.originalname}`;

        const { error } = await supabase.storage

            .from("school-pdfs")

            .upload(

                fileName,

                req.file.buffer,

                {

                    contentType: "application/pdf"

                }

            );

        if (error) {

            console.log(error);

            return res.status(500).json({

                success: false,
                message: error.message

            });

        }

        // ---------------- Public URL ----------------

        const { data } = supabase.storage

            .from("school-pdfs")

            .getPublicUrl(fileName);

        const pdf_url = data.publicUrl;

        // ---------------- Save Database ----------------

        const [result] = await db.query(

            `
            INSERT INTO school_pdfs
            (

                class_id,
                subject_id,
                pdf_title,
                pdf_url,
                uploaded_by

            )

            VALUES (?,?,?,?,?)

            `,

            [

                class_id,
                subject_id,
                pdf_title,
                pdf_url,
                uploaded_by || null

            ]

        );

        return res.status(201).json({

            success: true,
            message: "PDF Uploaded Successfully",

            pdf_id: result.insertId

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

    uploadPDF

};