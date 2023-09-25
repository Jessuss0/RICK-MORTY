const {Favorite, User} = require("../DB_connection");

const deleteFav = async (req, res)=>{
    const {id} = req.params;
    const {idUser} = req.query;

    try {
        const fav = await Favorite.findByPk(id);

        fav.removeUser(idUser);

        const allFavorites = await Favorite.findAll({
            include: [{model: User, where: {id: idUser}}]
        });

        return res.json(allFavorites);


    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = deleteFav;