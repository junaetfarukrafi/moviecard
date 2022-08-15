import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';

// b5ebe213
import './App.css';
import  SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=b5ebe213';

const Movie1 =  {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}


const App=()=> {
  const [Movies,setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

      const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    }

    useEffect(()=>{
   searchMovies('Spiderman');
  },[]);

  return (
    <div className='app'>
<h1>MovieLand</h1>
<div className='search'>
  <input 
   placeholder='Search For Movies'
   value= {searchTerm}
   onChange = {(e)=> setSearchTerm( e.target.value)}
  />

<img src="SearchIcon" alt="search" 
 onClick= {()=>searchMovies(searchTerm)}/>
</div>

{
  Movies?.length>0
  ?(
<div className='container'>
 
 {
  Movies.map((Movie1)=>(
    <MovieCard Movie1={Movie1}/>
  ))
 }

</div>
  ): (
    <div className='empty'>
<h2>No Movies Found</h2>
    </div>
  )

}
    </div>
  );
}
 export default App;


