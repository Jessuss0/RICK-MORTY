const express = require("express")
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res)=>{
    const {id} = req.params;
    if(!id){return res.staus(404).send("Not Found")};
    try {
        const {data} = await axios(URL + id);
        const {status, name, species, origin, image, gender} = data;
        return res.json({id, status, name, species, origin, image, gender});
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports =
 getCharById;