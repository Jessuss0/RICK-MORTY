const {Favorite, User} = require("../DB_connection");

const postFav = async (req, res)=>{
    const {name, origin, status, image, species, gender} = req.body;
    const {idUser} = req.query;

    try {
        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).json({message: "Faltan datos"})};

        const [fav , created] = await Favorite.findOrCreate({name, origin, status, image, species, gender});

        fav.addUser(idUser);

        const allFavorites = await Favorite.findAll({
            include: [{model: User, where: {id: idUser}}]
        });

        res.json(allFavorites);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = postFav;