const db = mysql.createConnection({
    host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
    port: 4000,
    user: "2P5o9dEST1LyBui.root",
    password: k64VzyYHPAMTnRLi,
    database: "sophynova",
    ssl: {
        rejectUnauthorized: false
    },
    connectTimeout: 30000
});
db.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("✅ Connected Successfully");
    }
});