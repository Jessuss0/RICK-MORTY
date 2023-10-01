import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeFav, filterCards, orderCards, resetFilt } from '../redux/actions';
import Cards from './Cards';

export default function Favorites(props){
    const favorites = useSelector((state)=> state.myFavorites);
    const dispatch = useDispatch();

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    const onClose = ()=>{
        console.log("xd")
     }

    useEffect(()=>{
        console.log(favorites)
    },[favorites])
    return(
    <div>
        <button onClick={()=>dispatch(resetFilt)}>RESET</button>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        <Cards characters={favorites} onClose={onClose}/>
    </div>
    )
        
};


// {favorites.length > 0 && favorites?.map((fav) => (
//     <div key={fav.id}>
//       <button onClick={() => dispatch(removeFav(fav.id))}>❤️</button>
//       <h2>{fav.name}</h2>
//       <h2>{fav.status}</h2>
//       <h2>{fav.species}</h2>
//       <h2>{fav.gender}</h2>
//       <h2>{fav?.origin?.name}</h2>
//       <img src={fav.image} alt={fav.name} />