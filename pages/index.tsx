import { useState,useEffect } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/interface/global.interface";
import {useDispatch,useSelector} from "react-redux";
import { setGlobalMovies } from "@/slice/MovieSlice";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";


const API_KEY = 'ad20575cdf796d64decd931cb0d5c1cb';


  export default function Home() {
  //const [movies,setMovies] = useState<Movie[]>([]);
  
  const {movies} = useSelector((state:any)=> state.move);
 //the useSelector hook is used to extract the movies state value from the Redux store and assign it to the movies variable within the component. This enables the component to access and use the movies value for rendering or other purposes.
  const dispatch = useDispatch();  // dispatch hook helps to call the reducer function, which eventually changes the store value.
    

  const getMovie = async() =>{
   try{
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular'+'?api_key='+API_KEY);
    dispatch(setGlobalMovies(response.data.results));
    // setMovies(response.data.results);
   }catch(error){
    console.log(error);
   }
  }
  useEffect(()=>{
    getMovie();
  },[])

  return (
  
  <>
  <div className="w-10/12 mx-auto py-8 ">
    <h1 className="text-2xl font-bold mb-4">Popular movies</h1>
    <SearchBox/>
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:place-item-center my-5">
      
      {/* by usign 'movies' && condition, the code ensures that mapping
      operation is performed only when 'movies' has true value i.e nonempty value. If 'movies' is false, the code within curly braces will not be executed, preventing any run-time errors. */}
      {movies &&
        movies.map((value:any)=>{
          return <MovieCard key={value.id} uniqueId={value.id} title={value.title} poster={"https://image.tmdb.org/t/p/w500"+value.poster_path} releaseYear={value.release_date} rating={value.vote_average}/> 
        })
      }
    </div>
    
  </div>
  <Footer/>
  </>
  
  )
}
