import React, { useState,useEffect } from 'react'
import axios from "../axios.js"
import "./Row.css"
const Row = ({title,fetchUrl, isLargeRow = false})=> {
  const [movies,setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/"
  useEffect(()=>{
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(
            request.data.results
        );
        return request;}
        fetchData();
      },[fetchUrl])
      console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map(movie =>(
          <img className={`row-poster ${isLargeRow && "row-posterLarge"}`}
           key={movie.id}
           src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt=""></img>
        )

        )}
      </div>  
    </div>
  )
}

export default Row