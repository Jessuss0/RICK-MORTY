const {Favorite} = require("../DB_connection");

const deleteFav = async (req, res)=>{
    const {id} = req.params;
    const {idUser} = req.query;

    try {
        await Favorite.destroy({where: {id}});

        const allFavorites = await Favorite.findAll();

        res.json(allFavorites);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = deleteFav;