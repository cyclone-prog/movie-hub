import {createSlice} from '@reduxjs/toolkit'
import { MovieInterface } from '@/interface/global.interface'
const initialState:MovieInterface = {
    movies:[]
}
const movieslice = createSlice({
    name:'Movies',
    initialState,
    reducers:{

    }

})
export default movieslice.reducer