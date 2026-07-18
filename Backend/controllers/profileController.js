const db = require("../config/db");

const getProfile = async (req, res) => {

    try {

        const userId = req.user.user_id;

        const [users] = await db.query(
            `SELECT
                user_id,
                full_name,
                email,
                mobile,
                profile_image,
                role,
                created_at
            FROM users
            WHERE user_id = ?`,
            [userId]
        );

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        res.json({
            success: true,
            user: users[0]
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};


const updateProfile = async (req, res) => {

    try {

        const userId = req.user.user_id;

        const {
            full_name,
            mobile
        } = req.body;

        await db.query(
            `UPDATE users
             SET full_name = ?, mobile = ?
             WHERE user_id = ?`,
            [full_name, mobile, userId]
        );

        res.json({
            success: true,
            message: "Profile Updated Successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};


const bcrypt = require("bcrypt");

const changePassword = async (req, res) => {

    try {

        const userId = req.user.user_id;

        const {
            currentPassword,
            newPassword,
            confirmPassword
        } = req.body;

        // Validate Input
        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All password fields are required."
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "New Password and Confirm Password do not match."
            });
        }

        // Get Current Password
        const [users] = await db.query(
            "SELECT password FROM users WHERE user_id = ?",
            [userId]
        );

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        // Compare Old Password
        const isMatch = await bcrypt.compare(
            currentPassword,
            users[0].password
        );

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Current Password is incorrect."
            });
        }

        // Hash New Password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update Password
        await db.query(
            "UPDATE users SET password = ? WHERE user_id = ?",
            [hashedPassword, userId]
        );

        res.json({
            success: true,
            message: "Password Changed Successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getProfile,
    updateProfile,
    changePassword
};