import React from 'react'
import "./HomeScreen.css"
import Nav from "../Nav"
import Banner from '../Banner.js'
import Row from "../Row.js"
import requests from '../../Requests'
const HomeScreen =  ()=>{
  return (
    <div className='HomeScreen'>
        <Nav />
        <Banner />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen;