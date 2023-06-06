import {createSlice} from '@reduxjs/toolkit'
import { MovieInterface } from '@/interface/global.interface'
const initialState:MovieInterface = {
    movies:[]
}
const movieslice = createSlice({
    name:'Movies',
    initialState,
    reducers:{
        setGlobalMovies:(state,data)=>{
            state.movies = data.payload;
        }
    }

})
export default movieslice.reducer
export const {setGlobalMovies} = movieslice.actions;