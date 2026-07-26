const supabase = require("../../config/supabase");
const db = require("../../config/db");

// ==========================================================
// UPLOAD PDF
// ==========================================================



const getSubjects = async (req, res) => {

    try {

        const { class_id } = req.params;

        const [subjects] = await db.query(

            `
            SELECT
                subject_id,
                subject_name
            FROM school_pdfs
            WHERE class_id = ?
            ORDER BY subject_name
            `,

            [Number(class_id)]

        );

        return res.json({

            success: true,
            subjects

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,
            message: err.message

        });

    }

};
const getClasses = async (req, res) => {
    try {

        const [classes] = await db.query(
            "SELECT class_id, class_name FROM school_classes ORDER BY class_id"
        );

        res.json({
            success: true,
            classes
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};
const uploadPDF = async (req, res) => {

    try {

        console.log("BODY :", req.body);
        console.log("FILE :", req.file);

        const {

            class_id,
            subject_id,
            subject_name,
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

            !class_id ||
            !subject_id ||
            !subject_name ||
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
            FROM school_pdfs
            WHERE
            class_id = ? AND subject_id = ? AND subject_name = ? LIMIT 1
            `,

            [

                Number(class_id),
                Number(subject_id),
                      (subject_name)

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
            SELECT pdf_url FROM school_pdfs
            WHERE class_id = ? AND subject_id = ? AND pdf_title = ? LIMIT 1
            `,

            [

                Number(class_id),
                Number(subject_id),
                pdf_title
                       

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
    .from("school_subjects")
    .upload(fileName, req.file.buffer, {
        contentType: "application/pdf",
        upsert: false,
    });


    console.log("SUPABASE DATA:", data);
console.log("SUPABASE ERROR:", error);

if (error) {
    console.log("Supabase Upload Error:", error);
    return res.status(500).json({
        success: false,
        message: error.message,
    });
}

const { data: publicUrlData } = supabase.storage
    .from("school_subjects")
    .getPublicUrl(fileName);

const pdf_url = publicUrlData.publicUrl;
             




const [result] = await db.query(

            `
            INSERT INTO school_pdfs
            (

               class_id,
               subject_id,
               subject_name,
               pdf_title,
               pdf_url,
               uploaded_by

            )

            VALUES (?,?,?,?,?,?)
            `,

            [

                Number(class_id),
                Number(subject_id),
                    (subject_name),
                pdf_title.trim(),
                pdf_url,
                uploaded_by

            ]

        );

        return res.status(201).json({

            success: true,
            message: "PDF Uploaded Successfully",
            pdf_url: result.insertId

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

//------------------------------------------------------------GET PDF--------------------------------------------------------------- */}


const getPDF = async (req, res) => {

    try {

        const {

            class_id,
            subject_id,
            subject_name

        } = req.query;

        if (

            !class_id ||
            !subject_id ||
            !subject_name

        ) {

            return res.status(400).json({

                success: false,
                message: "Missing Parameters."

            });

        }

        const [pdf] = await db.query(

            `
            SELECT * FROM school_pdfs WHERE
             class_id = ? AND subject_id = ? AND subject_name = ? LIMIT 1
            `,

            [

                Number(class_id),
                Number(subject_id),
                Number(subject_name)

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
                url:pdf[0].pdf_url
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
    getPDF,
    getClasses,
    getSubjects

};