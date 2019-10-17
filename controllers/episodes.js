const episodes = require('../models').episodes;
const webtoons = require('../models').webtoons;

exports.episode = (req, res) => {
    var idEpisode = req.params.id;
    episodes.findAll({ where: { id_webtoon: idEpisode } }).then(data => res.send(data))
}

exports.insert = (req, res) => {
    const idwebtoonParams = req.params.id_webtoon;
    const idwebtoonobj = { id_webtoon: idwebtoonParams };
    const newObject = { ...req.body, ...idwebtoonobj };
    console.log(newObject);
    episodes.create(newObject).then(webtoon => {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.update = (req, res) => {
    const idwebtoonParams = req.params.id_webtoon;
    const idwebtoonId = req.params.id;
    const idwebtoonobj = { id_webtoon: idwebtoonParams, id: idwebtoonId };
    episodes.update(
        req.body,
        { where: idwebtoonobj }
    ).then(webtoon => {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.delete = (req, res) => {
    const idwebtoonParams = req.params.id_webtoon;
    const idwebtoonId = req.params.id;
    const idwebtoonobj = { id_webtoon: idwebtoonParams, id: idwebtoonId };
    episodes.destroy({ where: idwebtoonobj }).then(webtoon => {
        res.send({
            message: "success",
            webtoon
        })
    })
}


    // const newObject = { ...req.body, req.params }
    // Webtoons.create(newObject).then(webtoon => {
    //     res.send({
    //         message: "success",
    //         webtoon
    //     })
    // }) 
//}


