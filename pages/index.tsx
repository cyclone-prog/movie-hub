import { useState,useEffect } from "react"
import axios from "axios";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/interface/global.interface";

const API_KEY = 'ad20575cdf796d64decd931cb0d5c1cb';


  export default function Home() {
  const [movies,setMovies] = useState<Movie[]>([]);

  const getMovie = async() =>{
   try{
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular'+'?api_key='+API_KEY);
    setMovies(response.data.results);
   }catch(error){
    console.log(error);
   }
  }
  useEffect(()=>{
    getMovie();
  },[])

  return (
  
  <>
  <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-4">Popular movies</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
      {
        movies.map((value)=>{
          return <MovieCard key={value.id} title={value.title} poster={"https://image.tmdb.org/t/p/w500"+value.poster_path} releaseYear={value.release_date} rating={value.vote_average}/> 
        })
      }
    </div>
  </div>
  </>
  
  )
}
