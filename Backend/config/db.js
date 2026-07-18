const mysql = require("mysql2");
require("dotenv").config();


const db = mysql.createConnection({
    host: process.env.DB_HOST || "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
    user: process.env.DB_USER || "2P5o9dEST1LyBui.root",
    password: process.env.DB_PASSWORD || "k64VzyYHPAMTnRLi" ,
    database: process.env.DB_NAME || "sophynova",
    port: process.env.DB_PORT || 4000,
    ssl:{rejectUnauthorized: true}

});


db.connect((err) => {
    if (err) {
        console.log("❌ MySQL Connection Error:");
        console.log(err);
    } else {
        console.log("✅ MySQL Connected Successfully");
    }
});

module.exports = db;