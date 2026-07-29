const db = require("../../config/db");
const supabase = require("../../config/supabase");

// Search PDFs

const searchSchoolPDFs = async (req, res) => {

    try {

        const { class_id, subject_id } = req.query;

        const [rows] = await db.query(

            `

            SELECT *

            FROM school_pdfs

            WHERE class_id=?

            AND subject_id=?

            `,

            [class_id, subject_id]

        );

        return res.json({

            success: true,

            pdfs: rows

        });

    }

    catch(err){

        console.log(err);

        res.status(500).json({

            success:false,

            message:err.message

        });

    }

};


// Get One PDF

const getSchoolPDF = async (req,res)=>{

    try{

        const { pdf_id } = req.query;

        const [rows] = await db.query(

            `
                SELECT

                pdf_id,
                pdf_title,
                pdf_url,
                uploaded_by

            FROM school_pdfs

            WHERE class_id = ?
            AND subject_id = ?

            ORDER BY pdf_title
            `,

            [class_id, subject_id]

        );

            [pdf_id]

    

        if(rows.length===0){

            return res.json({

                success:false,

                message:"PDF Not Found"

            });

        }

        res.json({

            success:true,

            pdf:rows[0]

        });

    }

    catch(err){

        console.log(err);

        res.status(500).json({

            success:false,

            message:err.message

        });

    }

};

module.exports={

    searchSchoolPDFs,

    getSchoolPDF

};