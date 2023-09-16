import React from "react"
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

export default function Nav(props){
    return(
        <nav>
            
            <SearchBar onSearch={props.onSearch} addRandom={props.addRandom}/>
            <button>
            <Link to={"/favorites"}>Favorites</Link>
            </button>
            <button>
            <Link to={"/about"}>About</Link>
            </button>
            <br/>
            <button>
            <Link to={"/home"}>Home</Link>
            </button>
            <br/>
            <button onClick={props.logOut}>Log Out</button>
            
        </nav>
    )
}