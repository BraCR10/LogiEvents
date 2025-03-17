
/**
 * Passport middleware configuration for JWT authentication.
 * 
 * @module middlewares/passport
 */

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require("../models/user");

/**
 * Options for the JWT strategy.
 * 
 * @type {Object}
 * @property {Function} jwtFromRequest - Function to extract JWT from request header.
 * @property {string} secretOrKey - Secret key to verify the JWT.
 */
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

/**
 * Verifies the JWT payload.
 * 
 * @async
 * @function verifyJWT
 * @param {Object} jwtPayload - The payload of the JWT.
 * @param {Function} done - Callback function to be called after verification.
 * @returns {Promise<void>}
 */
const verifyJWT = async (jwtPayload, done) => {
    try {
        const user = await User.findById(jwtPayload.id);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
};

passport.use(new JwtStrategy(options, verifyJWT));

/**
 * Passport module.
 * 
 * @type {Object}
 */
module.exports = passport;