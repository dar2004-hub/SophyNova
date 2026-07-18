const db = require("../config/db");

const searchData = async (req, res) => {

    try {

        const query = req.query.query;

        if (!query || query.trim() === "") {

            return res.json({

                success: true,

                exams: [],

                subjects: [],

                resources: [],

                books: [],

                pdfs: [],

                videos: [],

                previousPapers: [],

                mockTests: [],

                onlineSources: []

            });

        }

        const search = `%${query}%`;

        const [exams] = await db.promise().query(
            "SELECT * FROM exams WHERE exam_name LIKE ?",
            [search]
        );

        const [subjects] = await db.promise().query(
            "SELECT * FROM subjects WHERE subject_name LIKE ?",
            [search]
        );

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

            LEFT JOIN resource_types rt
            ON r.resource_type_id = rt.resource_type_id

            WHERE
                r.title LIKE ?

            ORDER BY
                r.title
            `,

            [search]

        );

        const [books] = await db.promise().query(
            "SELECT * FROM books WHERE book_title LIKE ?",
            [search]
        );

        const [pdfs] = await db.promise().query(
            "SELECT * FROM pdfs WHERE pdf_title LIKE ?",
            [search]
        );

        const [videos] = await db.promise().query(
            "SELECT * FROM videos WHERE video_title LIKE ?",
            [search]
        );

        const [previousPapers] = await db.promise().query(
            "SELECT * FROM previous_papers WHERE paper_title LIKE ?",
            [search]
        );

        const [mockTests] = await db.promise().query(
            "SELECT * FROM mock_tests WHERE test_title LIKE ?",
            [search]
        );

        const [onlineSources] = await db.promise().query(
            "SELECT * FROM online_sources WHERE source_title LIKE ?",
            [search]
        );

        return res.json({

            success: true,

            exams,

            subjects,

            resources,

            books,

            pdfs,

            videos,

            previousPapers,

            mockTests,

            onlineSources

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

    searchData

};