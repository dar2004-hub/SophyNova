const db = require("../config/db");

const getDailyThought = async (req, res) => {
    try {

// ---------------------------------------------------Total thoughts----------------------------------------------------------------



        const [countResult] = await db.query(
            "SELECT COUNT(*) AS total FROM daily_thoughts"
        );

        const total = countResult[0].total;

        if (total === 0) {
            return res.status(404).json({
                success: false,
                message: "No thoughts found."
            });
        }

    //--------------------------------------------------- Days since a fixed date--------------------------------------------------------



        const startDate = new Date("2025-01-01");
        const today = new Date();

        const diffDays = Math.floor(
            (today - startDate) / (1000 * 60 * 60 * 24)
        );

        //-------------------------------------------------- Loop through thoughts------------------------------------------------------
        const thoughtIndex = diffDays % total;





        // ---------------------------------------------------Fetch today's thought-------------------------------------------------------
        const [thought] = await db.query(
            `SELECT thought_id, thought, author
             FROM daily_thoughts
             LIMIT ?,1`,
            [thoughtIndex]
        );

        res.json({
            success: true,
            thought: thought[0]
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
    getDailyThought
};