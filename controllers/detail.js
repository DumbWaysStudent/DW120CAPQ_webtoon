const Details = require('../models').detail_episodes;
const Episodes = require('../models').episodes;
const Users = require('../models').users;
const Webtoons = require('../models').webtoons;

// Episodes.hasMany(Details, { foreignKey: 'id_episodes', as: 'detail' });

exports.index = (req, res) => {
    const idwebtoon = req.params.idWebtoon;
    const idepisode = req.params.idEpisode;

    console.log(idwebtoon);
    Episodes.hasMany(Details, { foreignKey: 'id_episodes', as: 'details' });
    Episodes.findAll({
        where: { id: idwebtoon, id_webtoon: idepisode },
        include: [{ model: Details, as: 'details' }]
    }).then(data => res.send(data[0].details))
}

exports.insert = (req, res) => {
    const idepsParams = req.params.id;
    const idwebtoonobj = { id_episodes: idepsParams };
    const newObject = { ...req.body, ...idwebtoonobj };
    Details.create(newObject).then(webtoon => {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.delete = (req, res) => {
    const idepisodeParams = req.params.episodeid;
    const idimage = req.params.id;
    const idwebtoonobj = { id_episodes: idepisodeParams, id: idimage };
    Details.destroy({ where: idwebtoonobj }).then(webtoon => {
        res.send({
            message: "success",
            webtoon
        })
    })
}

