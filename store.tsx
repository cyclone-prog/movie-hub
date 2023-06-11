import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from '@/slice/MovieSlice';
//The configureStore function takes the reducer object as an argument and returns an instance of the Redux store.
const store = configureStore({
    reducer:{
        move:MovieReducer,
    }
})      
export default store;