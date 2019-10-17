/*body parser*/
const bodyParser = require("body-parser");
/*jwt*/
const jwt = require('jsonwebtoken');
/*axios*/
const axios = require('axios');
/*group routes*/
require('express-group-routes');
/*express*/
const express = require("express");
const port = 5000;
const app = express();
/*model*/
const webtoons = require("./controllers/webtoons");
const episodes = require("./controllers/episodes");
const detailEpisodes = require("./controllers/detail");
const users = require("./controllers/users");

app.use(bodyParser.json());

/*========================================================================*/

app.group("/api/v1", (router) => {
    //[API] : 15.for_you_implementation
    router.get('/webtoons/', webtoons.index);
    // [API] : 15.for_you_implementation
    router.get('/webtoons/favourite', webtoons.favorite);
    // [API] : 15.for_you_implementation
    router.get('/webtoons/find/:title', webtoons.find);
    // [API] : 16.for_you_implementation
    router.get('/webtoons/:id/episodes', episodes.episode);

    router.get('/webtoons/:idWebtoon/episode/:idEpisode', detailEpisodes.index);

    router.post('/register', users.register);

    router.post('/logins', users.signin);

    router.get('/webtoons?is_favorite=true', webtoons.index);

    router.post('/users/:createdBy/webtoon', webtoons.insert);

    router.get('/users/:id/webtoons/', webtoons.data);

    router.put('/users/:createdBy/webtoon/:id', webtoons.update);

    router.delete('/users/:createdBy/webtoon/:id', webtoons.delete);

    router.post('/users/:id/webtoon/:id_webtoon/episode', episodes.insert);

    router.put('/users/:userid/webtoon/:id_webtoon/episode/:id', episodes.update);

    router.delete('/users/:userid/webtoon/:id_webtoon/episode/:id', episodes.delete);

    router.post('/users/:userid/webtoon/:id_webtoon/episode/:id/image', detailEpisodes.insert);

    router.delete('/users/:userid/webtoon/:id_webtoon/episode/:episodeid/image/:id', detailEpisodes.delete);

})

/*========================================================================*/

/*listing port*/
app.listen(port, () => console.log('connected'));  