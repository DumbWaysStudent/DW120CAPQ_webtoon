const Webtoons = require('../models').webtoons;
const Episodes = require('../models').episodes;

exports.index = (req, res) => {
    const favorite = req.query.is_favorite;
    const keyword = req.query.title;
    if (keyword) {
        Webtoons.findAll({ where: { title: keyword } }).then(data => res.send(data))
    }
    if (favorite) {
        if (favorite == 'true') {
            Webtoons.findAll({ where: { isFavorite: true } }).then(data => res.send(data))
        } else {
            Webtoons.findAll({ where: { isFavorite: false } }).then(data => res.send(data))
        }
    } else {
        Webtoons.findAll().then(data => res.send(data))
    }

}
exports.favorite = (req, res) => {
    Webtoons.findAll({ where: { isFavorite: false } }).then(data => res.send(data))
}
exports.find = (req, res) => {
    var keyword = req.params.title;
    Webtoons.findAll({ where: { title: keyword } }).then(data => res.send(data))
}
exports.data = (req, res) => {
    Webtoons.findAll({ where: { createdBy: req.params.id } }).then(data => res.send(data))
}
exports.insert = (req, res) => {
    const newObject = { ...req.body, ...req.params }
    Webtoons.create(newObject).then(webtoon => {
        res.send({
            message: "success",
            webtoon
        })
    })
}
exports.update = (req, res) => {
    Webtoons.update(
        req.body,
        { where: req.params }
    ).then(webtoon => {
        res.send({
            message: "success",
            webtoon
        })
    })
}
exports.delete = (req, res) => {
    Webtoons.destroy({ where: req.params }).then(webtoon => {
        res.send({
            message: "success",
            webtoon
        })
    })
}


