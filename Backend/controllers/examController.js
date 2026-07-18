const db = require("../config/db");

// Get all exams
const getAllExams = (req, res) => {

    const sql = "SELECT * FROM exams ORDER BY exam_name";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

// Search Exam
const searchExam = (req, res) => {

    const name = req.query.name || "";

    const sql =
        "SELECT * FROM exams WHERE exam_name LIKE ? ORDER BY exam_name";

    db.query(sql, [`%${name}%`], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

// Get Exam By ID
const getExamById = (req, res) => {

    const sql =
        "SELECT * FROM exams WHERE exam_id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {

            return res.status(404).json({
                message: "Exam Not Found"
            });

        }

        res.json(result[0]);

    });

};

module.exports = {
    getAllExams,
    searchExam,
    getExamById
};