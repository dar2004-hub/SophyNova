const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// --------------------------------------------------------------- DATABASE ------------------------------------------------------------


require("./config/db");


const db = require("./config/db");

(async () => {
  try {
    const [rows] = await db.query(`
      SELECT
        DATABASE() AS current_db,
        @@hostname AS host,
        @@port AS port
    `);

    console.log(rows);
  } catch (err) {
    console.error(err);
  }
})();

// -------------------------------------------------------- MIDDLEWARE ----------------------------------------------------------------


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------------STATIC FOLDER---------------------------------------------------------------


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --------------------------------------------------------- ROUTES ---------------------------------------------------------------------


const homeRoutes = require("./routes/homeRoutes");
const searchRoutes = require("./routes/searchRoutes");
const examRoutes = require("./routes/examRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const mockTestRoutes = require("./routes/mockTestRoutes");
const mockQuestionRoutes = require("./routes/mockQuestionRoutes");
const previousPaperRoutes = require("./routes/previousPaperRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const pdfRoutes = require("./routes/pdfRoutes");

app.use("/api/home", homeRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/mocktests", mockTestRoutes);
app.use("/api/mockquestions", mockQuestionRoutes);
app.use("/api/previouspapers", previousPaperRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/pdfs", pdfRoutes);

// ------------------------------------------------------- ROOT ----------------------------------------------------------
app.get("/", (req, res) => {

    res.send("🚀 SophyNova Backend Running Successfully");

});

// ---------------------------------------------------------404------------------------------------------------------------

app.use((req, res) => {

    res.status(404).json({

        success: false,
        message: "API Route Not Found"

    });

});

// --------------------------------------------------- SERVER ---------------------------------------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server Running on http://localhost:${PORT}`);

});