import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDelete, searchMovies, setGlobalMovies } from '@/slice/MovieSlice';
import { fetchDataFromApi } from '@/utils/api';


const SearchBox = () => {
    const [searchQuery,setSearchQuery] = useState('');  
    
    const dispatch = useDispatch();
    const originalMovies = useSelector((state:any)=> state.movie.originalMovies);
    //movie is reducer defined in store.
   
// const findMovies = (val:any)=>{
//     //storing in local states
// const lowercaseResult = val.trim().toLowerCase();
// const filterResult = originalMovies.filter((filterData:any)=>{
//     return filterData.title.toLowerCase().includes(lowercaseResult)
// })
// dispatch(searchMovies(filterResult));
// }
const findMovies =async ()=>{
    fetchDataFromApi(`/search/movie?query=${searchQuery}`).then((res)=>{
    dispatch(setGlobalMovies(res?.results));

    })
    // const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`,{
    //     headers:{
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDIwNTc1Y2RmNzk2ZDY0ZGVjZDkzMWNiMGQ1YzFjYiIsInN1YiI6IjY0N2UxYmViMGUyOWEyMmJkZmVjYTBkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7df2GsaXU-fSOuXtYv0T9PclSnJXakJkPbK_P4yHQkw',
    //     },
    // })
    // dispatch(setGlobalMovies(response?.data?.results));
}
useEffect(() => {
    const debounceFN = setTimeout(() => {
        if (searchQuery.trim() !== "") {
            findMovies();
          }
    }, 900);

    return () => clearTimeout(debounceFN);
  }, [searchQuery]);


return (
    

<div>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search movies here..." required onChange={(e:any)=>setSearchQuery(e.target.value)}/>
        
    </div>
</div>


  )
}

export default SearchBox