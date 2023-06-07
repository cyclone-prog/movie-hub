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
  const movies = useSelector((state:any)=>state.MovieReducer.movies);
  const dispatch = useDispatch();
  const delItem = (uniqueId:any) => {
    dispatch(handleDelete(uniqueId));
    toast.error('successfully deleted');


  }
  return (
    <div className='max-w-xs rounded overflow-hidden hover:shadow-lg text-center'>
        <img src={poster} className='width-full'  alt={title} />
        <div className="px-6 py-4">
            <div className='font-bold text-xl mb-2'>{title}</div>
            <p className="text-gray-700 text-base mb-2">{releaseYear} </p>
            <p className='text-purple-400 text-base'> {rating}</p>
            
        </div>
        <button className='bg-red-500 hover:bg-red-700 px-4 py-2 rounded' onClick={(e)=>(delItem(uniqueId))} >Delete</button>
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