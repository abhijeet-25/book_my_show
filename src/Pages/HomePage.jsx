import React, { useEffect, useState } from 'react';
//importing layouts and other components
import DefaultLayout from '../LayoutHoc/Default.Layout';
import {EntertainmentCardSlider} from '../Components/Navbar/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../Components/Navbar/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../Components/Navbar/PosterSlider/PosterSlider';
import SquareSlider from '../Components/Navbar/PosterSlider/SquareSlider';
import axios from 'axios';


const HomePage = () => {
  const [RecommendedMovies, setRecommendedMovies] = useState([]);
  const [PremiereMovies, setPremiereMovies] = useState([]);
  const [OnlineStreaming, setOnlineStreaming] = useState([]);

  useEffect(( ) => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/popular")
      setPremiereMovies(getTopRatedMovies.data.results);
    }
    requestTopRatedMovies();
  },[])
  useEffect(( ) => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated")
      setOnlineStreaming(getTopRatedMovies.data.results);
    }
    requestTopRatedMovies();
  },[])

  return (
    <>
      <HeroCarousel />
     
      <div className="container w-11/12 mx-auto px-4 mb-28 md: px-12 my-8 ">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3 ">The Best of All</h1>
        <EntertainmentCardSlider />
      </div>
      <div className='container hidden md:hidden lg:flex w-11/12 mx-auto my-auto px-4 '>
        <img className='w-full h-full px-8 mx-auto' src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="" />
      </div>
      <div className="container w-11/12 mx-auto px-4 mt-24 md:px-12 my-8">
      <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3 ">The Best of Entertainement</h1>
        <SquareSlider title="Recommended Movies" 
        subtitle="List of Recommended Movies"
         posters={RecommendedMovies} isDark={false} />

      </div>
     
      <div className="bg-premier-800 py-12">
        <div className="container w-11/12 mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img className="w-full h-full" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="rupay"  />
          </div>
          <PosterSlider title="Premiere Movies" 
        subtitle="List of Premiere Movies"
         posters={PremiereMovies} isDark={true} />

        </div>
      </div>
     
      <div className="container w-11/12 mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
      <PosterSlider title="Online Streaming Events" 
        subtitle="List of Online Streaming Events"
         posters={OnlineStreaming} isDark={false} />

      </div>
    </>
  )
}

export default DefaultLayout(HomePage)