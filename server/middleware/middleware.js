const User = require('../models/users')
const jwt = require('jsonwebtoken')
const Mongoose = require('mongoose');

class Middleware {
    static authenticate(req, res, next) {
        let token = req.headers.token
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
                if (!err) {
                    User.findById(decoded.userId)
                        .then(function (user) {
                            req.userData = user
                            next()
                        })
                } else {
                    res.status(500).json({
                        message: 'Invalid Token'
                    })
                }
            })
        } else {
            res.status(500).json({
                message: 'Token Not Found'
            })
        }
    }
}

module.exports = Middleware;