// Load modules
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// Middleware
const multer = require('../middlewares/multer');
const passport = require('../middlewares/passport');

// Router
const router = express.Router();

// Import models
const Media = require('../models/media');
const User = require('../models/user');

// Import handlers
const bodyHandler = require('../handlers/bodyHandler');

// Constants
const secret = process.env.JWT_SECRET;

// Create a new media for user.
router.post('/media', passport.authenticate('jwt', { session: false }), multer.single('media'), async (req, res) => {
    try {
        const check = ['media'];
        bodyHandler(check, req.body);

        const { media } = req.body;

        const newMedia = new Media({
            media,
            user: req.user.id
        });

        await newMedia.save();

        res.status(201).json(newMedia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all media for user.
router.get('/media', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const media = await Media.find({ user: req.user.id });

        res.status(200).json(media);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

