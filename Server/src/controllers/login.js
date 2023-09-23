const users = require("../utils/users")

const login = (req, res)=>{
    const {email, password} = req.query;

    userFound = users.find(user=> user.email== email && user.password == password);

    return userFound ? res.json({ access:true }) : res.json({ access:false })
};

module.exports = login;