import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { handleDelete } from '@/slice/MovieSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface MovieCardInterface {
    uniqueId:number;
    key:number;
    title:string;
    poster:string;
    releaseYear:string;
    rating:number;
  }


const MovieCard = ({uniqueId,title,poster,releaseYear,rating}: MovieCardInterface) => {
  console.log();
  const movies = useSelector((state:any)=>state.movie.movies);
  const dispatch = useDispatch();
  const delItem = (uniqueId:any) => {
    dispatch(handleDelete(uniqueId));
    toast.error('successfully deleted');
  }
  return (
    <div className='bg-purple-100 mx-auto container rounded overflow-hidden hover:shadow-lg text-center relative'>
      
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"><img src={poster} className='width-full'  alt={title} /></div>
        
        <div className="px-6 py-4">
            <div className='font-bold text-sm mb-2'>{title}</div>
            <p className="text-gray-700 text-base mb-2">{releaseYear} </p>
            <p className='text-purple-400 text-base'> {rating}</p> 
        </div>
        <button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500" onClick={(e)=>(delItem(uniqueId))}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
  
  
        <ToastContainer
    position="bottom-right"
    autoClose={306}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    />
    </div>
  )
}

export default MovieCard