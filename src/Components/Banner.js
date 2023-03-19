import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "../axios.js"
import requests from '../Requests'
const Banner = ()=>{
    const [movie,setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ] 
            );
            return request;
        }
        fetchData();
    },[]);
    console.log(movie);
    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + "..." : string; 
    }
  return (
    <header className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }}>
        <div className='banner-contents'>
            <h1 className='banner-title'>{movie?.name}</h1>
            <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <div className='banner-description'>
                <h1>{truncate(movie?.overview,150)}
                </h1>
            </div>
        </div>
         <div className='banner-fadeBottom' />
    </header>
  )
}

export default Banner