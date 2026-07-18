const db = require("../config/db");

async function generateQuestions() {

    try {

        // Get all mock tests
        const [mockTests] = await db.promise().query(
            "SELECT mock_id, total_questions FROM mock_tests"
        );

        console.log(`Found ${mockTests.length} mock tests`);

        let batch = [];

        for (const mock of mockTests) {

            for (let i = 1; i <= mock.total_questions; i++) {

                const answers = ["A", "B", "C", "D"];

                batch.push([
                    mock.mock_id,
                    `Question ${i} of Mock Test ${mock.mock_id}`,
                    "Option A",
                    "Option B",
                    "Option C",
                    "Option D",
                    answers[Math.floor(Math.random() * 4)],
                    `Explanation for Question ${i}`
                ]);

                // Insert every 1000 rows
                if (batch.length === 1000) {

                    await db.promise().query(
                        `INSERT INTO mock_questions
                        (mock_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation)
                        VALUES ?`,
                        [batch]
                    );

                    console.log(`${batch.length} questions inserted`);

                    batch = [];
                }
            }
        }

        // Insert remaining rows
        if (batch.length > 0) {

            await db.promise().query(
                `INSERT INTO mock_questions
                (mock_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation)
                VALUES ?`,
                [batch]
            );

            console.log(`${batch.length} questions inserted`);
        }

        console.log("✅ Mock Questions Generated Successfully");

        process.exit();

    } catch (err) {

        console.error(err);

    }

}

generateQuestions();