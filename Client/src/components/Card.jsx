import { Link } from "react-router-dom";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


export function Card( {name, id, onClose, image, species, myFavorites, addFav, removeFav, status, gender, origin }) {

   const [isFav, setIsFav] = useState(false);

   const character = {name, id, species, image, onClose, status, gender, origin}

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav(character)
      }
   };

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   return (
      <div>
               <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
         <button onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{gender}</h2>
         <h2>{species}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

export const mapDispatchToProps =(dispatch)=>{
   return{
      addFav: (character)=> dispatch(actions.addFav(character)),
      removeFav: (id)=> dispatch(actions.removeFav(id)),
   }
}

export const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
