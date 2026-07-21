const supabase = require("../config/supabase");
const db = require("../config/db");

// ==========================================================
// UPLOAD PDF
// ==========================================================

const uploadPDF = async (req, res) => {

    try {

        console.log("BODY :", req.body);
        console.log("FILE :", req.file);

        const {

            exam_id,
            subject_id,
            resource_type_id,
            pdf_title,
            uploaded_by

        } = req.body;

    {/*--------------------------------------------------------------- Validation -----------------------------------------------------*/}


        if (!req.file) {

            return res.status(400).json({

                success: false,
                message: "Please select a PDF."

            });

        }

        if (

            !exam_id ||
            !subject_id ||
            !resource_type_id ||
            !pdf_title

        ) {

            return res.status(400).json({

                success: false,
                message: "All fields are required."

            });

        }

        {/*--------------------------------------------------Check Resource Exists-----------------------------------------------------------------*/}

        const [resource] = await db.query(

            `
            SELECT *
            FROM resources
            WHERE
            exam_id = ? AND subject_id = ? AND resource_type_id = ? LIMIT 1
            `,

            [

                Number(exam_id),
                Number(subject_id),
                Number(resource_type_id)

            ]

        );

        if (resource.length === 0) {

            return res.status(404).json({

                success: false,
                message: "Resource not found."

            });

        }

       {/*-------------------------------------------------------Duplicate Check---------------------------------------------------------------------- */}



        const [existing] = await db.query(

            `
            SELECT pdf_id FROM pdfs
            WHERE exam_id = ? AND subject_id = ? AND resource_type_id = ? LIMIT 1
            `,

            [

                Number(exam_id),
                Number(subject_id),
                Number(resource_type_id)

            ]

        );

        if (existing.length > 0) {

            return res.status(409).json({

                success: false,
                message: "PDF already uploaded for this resource."

            });

        }

    console.log(req.file);

    {/*--------------------------------------------------------------Insert PDF -----------------------------------------------------------------------*/}

const fileName =   `${Date.now()}-${req.file.originalname}`;

const { data, error } = await supabase.storage
    .from("pdfs")
    .upload(fileName, req.file.buffer, {
        contentType: "application/pdf",
        upsert: false,
    });

if (error) {
    return res.status(500).json({
        success: false,
        message: error.message,
    });
}

const { data: publicUrlData } = supabase.storage
    .from("pdfs")
    .getPublicUrl(fileName);

const pdf_file = publicUrlData.publicUrl;
             




const [result] = await db.query(

            `
            INSERT INTO pdfs
            (

                exam_id,
                subject_id,
                resource_type_id,
                pdf_title,
                pdf_file,
                uploaded_by

            )

            VALUES (?,?,?,?,?,?)
            `,

            [

                Number(exam_id),
                Number(subject_id),
                Number(resource_type_id),
                pdf_title.trim(),
                pdf_file,
                uploaded_by

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

{/*------------------------------------------------------------GET PDF--------------------------------------------------------------- */}


const getPDF = async (req, res) => {

    try {

        const {

            exam_id,
            subject_id,
            resource_type_id

        } = req.query;

        if (

            !exam_id ||
            !subject_id ||
            !resource_type_id

        ) {

            return res.status(400).json({

                success: false,
                message: "Missing Parameters."

            });

        }

        const [pdf] = await db.query(

            `
            SELECT * FROM pdfs WHERE
             exam_id = ? AND subject_id = ? AND resource_type_id = ? LIMIT 1
            `,

            [

                Number(exam_id),
                Number(subject_id),
                Number(resource_type_id)

            ]

        );

        if (pdf.length === 0) {

            return res.status(404).json({

                success: false,
                message: "PDF Not Uploaded Yet."

            });

        }

        return res.status(200).json({

            success: true,
            pdf:{
                ... pdf[0],
                url:pdf[0].pdf_file
            }

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

    uploadPDF,
    getPDF

};