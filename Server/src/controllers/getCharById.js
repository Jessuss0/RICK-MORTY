const express = require("express")
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res)=>{
    const {id} = req.params;
    if(id){
        axios(URL + id)
        .then(response=> {const {id, status, name, species, origin, image, gender}= response.data
        
           if(name){ 
            return res.json({id, status, name, species, origin, image, gender})
        }
        return res.status(404).send("Not found")

    })
        .catch(error=> res.status(500).send(error.message));
    }
}

module.exports =
 getCharById;