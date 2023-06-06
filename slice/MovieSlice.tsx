import {createSlice} from '@reduxjs/toolkit'
import { MovieInterface } from '@/interface/global.interface'
const initialState:MovieInterface = {
    movies:[]
}
const movieslice = createSlice({
    name:'Movies',
    initialState,
    // (state,data): (state) represents the current state of redux store, it is the state that existed before the action is dispatched. (data) parameter represents the action object that was dispatched. In this case it contains, 'payload' property that holds the data passed to the action.
    // This line updates the movies property of the state object with the value of data.payload.
    reducers:{
        setGlobalMovies:(state,data)=>{
            state.movies = data.payload;
            // This line updates the movies property of the state object with the value of data.payload. (response.data.results) is passed as the payload.
            
        }
    }

})
export default movieslice.reducer
export const {setGlobalMovies} = movieslice.actions;