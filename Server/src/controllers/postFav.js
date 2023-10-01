const {Favorite, User} = require("../DB_connection");

const postFav = async (req, res)=>{
    const {id, name, origin, status, image, species, gender} = req.body;

    try {
        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).json({message: "Faltan datos"})};

        const [fav , created] = await Favorite.findOrCreate({
            where: {id, name, origin, status, image, species, gender},
            defaults: {id, name, origin, status, image, species, gender},
          });

        fav.addUser(idUser);

        const allFavorites = await Favorite.findAll();

        res.json(allFavorites);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = postFav;