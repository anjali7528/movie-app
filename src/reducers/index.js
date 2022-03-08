import { combineReducers } from "redux";
import { ADD_MOVIES,ADD_TO_FAVOURITE,REMOVER_FROM_FAVOURITES,SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState ={
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies (state = initialMoviesState, action){
    
    console.log('MOVIES REDUCER');

    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVER_FROM_FAVOURITES:
        const filterdArray = state.favourites.filter(
            movie => movie.Title !== action.movie.Title
        ); 
           return{
            ...state,
            favourites: filterdArray            
            };
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
               showFavourites: action.val
            };  
        default:
            return  state;
        }
}


const initialSearchState ={
    result: {}
};
export function search(state =initialSearchState, action){
    console.log('SEARCH REDUCER');
    return state;
}

const initialRootState ={
    movies: initialMoviesState,
    search: initialSearchState
}
// export default function rootReducer (state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         serach:  search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
});

