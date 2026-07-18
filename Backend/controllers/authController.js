const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");


// ================= REGISTER ===================

const register = async (req, res) => {

    try {

        const {
            full_name,
            email,
            mobile,
            password
        } = req.body;

        if (!full_name || !email || !mobile || !password) {

            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });

        }

        // Check Email

        const [existing] = await db.query(

            "SELECT * FROM users WHERE email=?",

            [email]

        );

        if (existing.length > 0) {

            return res.status(400).json({
                success: false,
                message: "Email already exists."
            });

        }

        // Encrypt Password

        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert User

        await db.query(

            `INSERT INTO users
            (full_name,email,mobile,password)
            VALUES(?,?,?,?)`,

            [
                full_name,
                email,
                mobile,
                hashedPassword
            ]

        );

        res.status(201).json({

            success: true,

            message: "Registration Successful"

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};


// ================= LOGIN ===================

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const [users] = await db.query(

            "SELECT * FROM users WHERE email=?",

            [email]

        );

        if (users.length === 0) {

            return res.status(401).json({

                success: false,

                message: "Invalid Email"

            });

        }

        const user = users[0];

        const match = await bcrypt.compare(

            password,

            user.password

        );

        if (!match) {

            return res.status(401).json({

                success: false,

                message: "Invalid Password"

            });

        }

        const token = jwt.sign(

            {

                user_id: user.user_id,

                email: user.email,

                role: user.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn: process.env.JWT_EXPIRES_IN

            }

        );

        res.json({

            success: true,

            message: "Login Successful",

            token,

            user: {

                user_id: user.user_id,

                full_name: user.full_name,

                email: user.email,

                role: user.role

            }

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

module.exports = {

    register,

    login

};