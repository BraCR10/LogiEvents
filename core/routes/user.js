// Load modules
const express = require('express');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passport = require('../middlewares/passport');

// Router
const router = express.Router();

// Import models
const User = require('../models/user');

// Import handlers
const bodyHandler = require('../handlers/bodyHandler');

// Constants
const secret = process.env.JWT_SECRET;
const requireAuth = passport.authenticate('jwt', { session: false });

// Change password logged in user
router.post('/change-password', requireAuth, async (req, res) => {

    try {
        const check = ['oldPassword', 'newPassword'];
        bodyHandler(check, req.body);

        const { oldPassword, newPassword } = req.body;

        const user = await User.findById(req.user._id);

        if (!user){
            throw new Error('User not found');
        }

        const isMatch = await bcryptjs.compare(oldPassword, user.password);

        if (!isMatch){
            throw new Error('Old password is incorrect');
        }

        const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

        if (!passwordRegex.test(newPassword)){
            throw new Error('Password is not strong enough');
        }

        const hashedPassword = await bcryptjs.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        res.status(200).send('Password changed successfully');

    }
    catch (error) {
        res.status(400).send(error.message);
    }
});


// Change password without logging in
router.post('/change-password/:id', async (req, res) => {

    try {
        const check = ['newPassword'];
        bodyHandler(check, req.body);

        const { newPassword } = req.body;

        const user = await User.findById(req.params.id);

        if (!user){
            throw new Error('User not found');
        }

        const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

        if (!passwordRegex.test(newPassword)){
            throw new Error('Password is not strong enough');
        }

        const hashedPassword = await bcryptjs.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        res.status(200).send('Password changed successfully');

    }
    catch (error) {
        res.status(400).send(error.message);
    }
});



module.exports = router;