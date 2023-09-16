import { Card } from "./Card"
import { connect } from "react-redux"

export function Favorites(props){
    console.log(props);

    return(
        <div>
            {props.myFavorites?.map((fav)=>{
                return <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                onClose={fav.onClose}
                />
            })}
        </div>
    )
        }

export const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);