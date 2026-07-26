const db = require("../../config/db");
const supabase = require("../../config/supabase");

const uploadPDF = async (req, res) => {

    try {

        const {

            class_id,
            subject_id,
            pdf_title,
            uploaded_by

        } = req.body;

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "Select PDF"
            });

        }

        const fileName = `${Date.now()}-${req.file.originalname}`;

        const { error } = await supabase.storage
            .from("school_subjects")
            .upload(fileName, req.file.buffer, {
                contentType: "application/pdf"
            });

        if (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }

        const { data } = supabase.storage
            .from("school_subjects")
            .getPublicUrl(fileName);

        await db.query(

            `
            INSERT INTO school_pdfs
            (
                class_id,
                subject_id,
                pdf_title,
                pdf_url,
                uploaded_by
            )

            VALUES(?,?,?,?,?)
            `,

            [

                class_id,
                subject_id,
                pdf_title,
                data.publicUrl,
                uploaded_by || null

            ]

        );

        res.json({

            success: true,
            message: "PDF Uploaded"

        });

    }

    catch(err){

        console.log("full error");

        res.status(500).json({

            success:false,
            message:err.message

        });

    }

};

module.exports = {

    uploadPDF

};