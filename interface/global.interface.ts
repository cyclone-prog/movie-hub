//stating, 'type' to the values inside Movie interface that is object, and this 'Movie'can be used as type inside any object variable.
// i.e id has number data type, 
//   title has string data type,
//   poster_path has string data type,
//   release_date has string data type....
export interface Movie {
    id:number;
    title:string;
    poster_path:string;
    release_date:string;
    vote_average:number;
  }
// interface keyword: This keyword is used to define a new interface in TypeScript.
// Array<Movie>: This defines a property named movies of type Array<Movie>. The Array<Movie> type denotes an array of objects, where each object conforms to the structure defined by the Movie interface (assuming the Movie interface is already defined elsewhere in your code).
 export interface MovieInterface{
  movies:Array<Movie>
}