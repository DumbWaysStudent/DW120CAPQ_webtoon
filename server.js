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

//middlewares
const { authenticated } = require('./middleware');

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
    // [API] : 17.detail_episode_implementation
    router.get('/webtoons/:idWebtoon/episode/:idEpisode', detailEpisodes.index);
    // [API] : 14.register_implementation
    router.post('/register', users.register);
    // [API] : 13.login_implementation
    router.post('/login', users.signin);
    // [API] : 19.search_webtoon_implementation 
    router.get('/webtoons?title=keyword', webtoons.index);
    // [API] : 18.favorite_implementation
    router.get('/webtoons?is_favorite=true', authenticated, webtoons.index);
    // [API] : 20.my_webtoon_creation_implementation
    router.get('/users/:id/webtoons/', authenticated, webtoons.data);
    // [API] : 21.my_webtoon_creation_implementation  
    router.post('/users/:createdBy/webtoon', authenticated, webtoons.insert);
    // [API] : 22.update_detail_my_webtoon_implementation
    router.put('/users/:createdBy/webtoon/:id', webtoons.update);
    // [API] : 22.update_detail_my_webtoon_implementation
    router.get('/users/:createdBy/webtoon/:id/episodes', webtoons.episode);

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