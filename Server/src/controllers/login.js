const users = require("../utils/users")

const login = async (req, res)=>{
    const {email, password} = req.query;
    try {
        userFound = await users.find(user=> user.email== email && user.password == password);

    return userFound ? res.json({ access:true }) : res.json({ access:false });

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = login;