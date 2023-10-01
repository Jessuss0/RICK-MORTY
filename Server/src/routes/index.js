//const postFav = require("../controllers/postFav");
//const deleteFav = require("../controllers/deleteFav");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const router = require("express").Router();
const {postFav, deleteFav} = require("../controllers/handleFavorite");

router.get("/character/:id", getCharById)

router.get("/login", login)

router.post("/login", postUser);

router.post("/fav", postFav)

router.delete("/fav/:id", deleteFav)

module.exports = router;