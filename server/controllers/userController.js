const User = require('../models/users')
const { encrypt } = require('../helpers')
const jwt  = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')

class Controller {
    static signup(req,res){
        encrypt(req.body.password)
        .then(function(encryptedPassword) {
            let newUser = new User({
                name:  req.body.name,
                email:   req.body.email,
                password: encryptedPassword,
            })
            return newUser
        })
        .then(function(newUser) {
            newUser.save()
            res.status(201).json({
                message : 'signup success',
                user : newUser
            })
        })
        .catch(function(err){
           console.log(err)
           res.status(500).json({
               message : 'failed to create user',
               err : err
           })
        })
    }

    static signin(req,res){
        User.findOne({
            email : req.body.email
        })
        .then(function(dataUser){
            let decrypt = bcrypt.compareSync(req.body.password, dataUser.password); // true
            if(decrypt == true){
                let token = jwt.sign({
                    userId : dataUser._id,
                    name : dataUser.name,
                    email : dataUser.email
                }, process.env.SECRET_KEY)

                res.status(201).json({
                    userId : dataUser._id,
                    name : dataUser.name,
                    email : dataUser.email,
                    token : token
                })
            }else{
                res.status(500).json({
                    message : 'Invalid password'
                })
            }
        })
        .catch(function(){
            res.status(500).json({
                message : `Invalid username`
            })
        })
    }
}

module.exports = Controller;