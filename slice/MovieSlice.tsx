import {createSlice} from '@reduxjs/toolkit'
import { MovieInterface } from '@/interface/global.interface'
//In JavaScript or TypeScript, an object is often used as a container for holding multiple values or properties. In this case, the initialState object is being used to represent the initial state of a movie-related application. The movies property is an array that will hold movie objects.

//Although the movies property itself is an array (which is an ordered collection of values), it is still encapsulated within an object. This object provides a convenient way to store and access the movies array along with any other properties that might be needed for the application's state.
//By using an object to wrap the array, you can easily add more properties to the state object in the future if needed. For example, you might want to include additional information like the user's preferences or filters for the movies. By using an object as the state, you can extend its functionality and structure as your application grows.
const initialState:MovieInterface = {
    movies:[],
    originalMovies:[],
}
const movieslice = createSlice({
    name:'Movies',
    initialState,
    // (state,data): (state) represents the current state of redux store, it is the state that existed before the action is dispatched. (data) parameter represents the action object that was dispatched. In this case it contains, 'payload' property that holds the data passed to the action.
    // This line updates the movies property of the state object with the value of data.payload.
    reducers:{
        setGlobalMovies:(state,data)=>{
            state.movies = data.payload;
            state.originalMovies = data.payload;
            // This line updates the movies property of the state object with the value of data.payload. (response.data.results) is passed as the payload.   
        },
        handleDelete:(state,data)=>{
            state.movies = state.movies.filter((movie)=>movie.id!=data.payload);
            // console.log(state.movies[0].id);  
        },
        searchMovies:(state,data)=>{
            state.movies = data.payload;
        }
        
    }

})

export default movieslice.reducer
export const {setGlobalMovies,handleDelete,searchMovies} = movieslice.actions;