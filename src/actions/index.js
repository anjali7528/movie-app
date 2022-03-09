// {
//     type: ' ADD_MOVIES'
//     movies: [] 
// //     userinfo : []
//  }

// {
//     type:'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVER_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIES_TO_LIST = 'ADD_MOVIES_TO_LIST'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'

//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addfavourite(movie) {
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFavourite(movie) {
    return {
        type: REMOVER_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    };
}

export function addMovieToList(movie){
    return {
        type: ADD_MOVIES_TO_LIST,
        movie
    };
}

export function handleMovieSearch(movie){
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=efaf56ac&t=${movie}`;

    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie =>{
            console.log('movie',movie);
    
    

        //dispatch an action
    dispatch({type: 'ADD_SEARCH_RESULT', movie})
    })
}
}


export function addMovieSearchResult (movie){
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}