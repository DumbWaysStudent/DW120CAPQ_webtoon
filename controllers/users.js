const users = require('../models').users;
const jwt = require('jsonwebtoken');

exports.index = (req, res) => {
    users.findAll().then(todos => res.send(todos))
}

exports.register = (req, res) => {
    users.create(req.body).then(webtoon => {
        var generateToken = jwt.sign({ name: req.body.name }, 'qwer1234');
        res.send({
            username: webtoon.username,
            token: generateToken
        })
    })
}

exports.signin = (req, res) => {
    const password = req.body.password;
    users.findOne({ where: { username: req.body.username } }).then(function (result) {
        if (result) {
            if (result.password == req.body.password) {
                var generateToken = jwt.sign({ name: req.body.username }, 'qwer1234');
                res.send({
                    "code": 200,
                    "success": "user sign in sucessfully",
                    "username": result.username,
                    "token": generateToken,
                });
            } else {
                res.send({
                    "code": 400,
                    "failed": "password is wrong"
                })
            }
        } else {
            res.send({
                "code": 400,
                "failed": "username undefined"
            })
        }
    })
} 