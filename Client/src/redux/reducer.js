import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case FILTER:
      let copia = [...state.allCharacters];
      let filtrado = copia.filter((char) => char.gender === action.payload);
      return { ...state, myFavorites: filtrado };

    case ORDER:
      let copiaOrder = [...state.myFavorites]; // Crear una copia del array
      let ordenados =
        action.payload === "A"
          ? copiaOrder.sort((a, b) => a.id - b.id)
          : copiaOrder.sort((a, b) => b.id - a.id);
      return { ...state, myFavorites: ordenados };

    case RESET: 
    let cop = [...state.allCharacters]
     return {...state, myFavorites: cop};

    default:
      return { ...state };
  }
};

export default rootReducer;
