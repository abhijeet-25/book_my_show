import React,{useEffect,useState ,useContext} from 'react'
import MovieLayout from '../LayoutHoc/Movie.Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { MovieContext } from '../context/Movie.context';
import Slider from 'react-slick';
import {FaCcVisa,FaCcApplePay} from "react-icons/fa"
import PosterSlider from '../Components/Navbar/PosterSlider/PosterSlider';
import MovieHero from '../Components/MovieHero/MovieHero';
import Cast from '../Components/CastComponent';
const MoviePage = () => {
  const {movie ,setMovie} = useContext(MovieContext);
  const {id} = useParams([]);
  const [cast,setCast] = useState([]);
  const [similar,setSimilar] = useState([]);
  const [recommended,setRecommended] = useState([]);
  useEffect(() =>{
   const requestCast = async () =>{
    const getCast = await axios.get(`/movie/${id}/credits`);
    setCast(getCast.data.cast);
   }
   requestCast();
  },[id])
  
  useEffect(() =>{
   const requestSimilar = async () =>{
    const getSimilar = await axios.get(`/movie/${id}/similar`);
    setSimilar(getSimilar.data.results);
   }
   requestSimilar();
  },[id])

  useEffect(() =>{
    const recommended = async () =>{
      const getRecommended = await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getRecommended.data.results);
    }
    recommended();
  },[id])

  useEffect(() =>{
    const requestMovie = async () =>{
      const getData = await axios.get(`/movie/${id}`)
      setMovie(getData.data)
    }
    requestMovie();
  })

   const settingCast = {
    infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
   }
   const settings = {
    infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
   }
  return (
  <>
  <MovieHero />
  <div className='container my-16 px-5 lg-ml-20 lg:w-2/1 '>
    <div className='flex flex-col items-start gap-4'>
      <h1 className='text-black font-bold text-2xl'>About</h1>
    
      <p className='text-black font-bold'>{movie.overview}</p>

    </div>
    <div className='my-7'>
      <hr />
    </div>
    <div className='my-7'> 
    <h2 className='text-gray-800 font-bold text-2xl mb-4'>
      Applicable offers
    </h2>
    <div className='flex flex-col gap-3 lg:flex-row '>
      <div className=' flex items-start gap-3 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
        <div className='w-8 h-8'>
          <FaCcVisa className='w-full h-full' />
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='text-gray-800 text-xl font-bold'>Visa Stream Offer</h3>
          <p className= 'text-gray-700'>Get upto 30% off upto INR 100 on All rupay card </p>
        </div>
      </div>
      <div className=' flex items-start gap-3 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
        <div className='w-8 h-8'>
          <FaCcApplePay className='w-full h-full' />
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='text-gray-800 text-xl font-bold'>Apple Pay Offer</h3>
          <p className= 'text-gray-700'>Get upto 35% off upto INR 120 to Apple Pay users </p>
        </div>
      </div>
    </div>
   
      
   
    </div>
    <div className='my-7'>
      <hr />
    </div>
    {/* {crew slider} */}
    <div className='my-8'>
    <h2 className='text-gray-800 font-bold text-2xl mb-4'>
      Cast and Crew
    </h2>
    <Slider {...settingCast}>
      {cast.map((castData) =>(
     <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character}/> 
      ))}

    </Slider>

    </div>
    <div className='my-7'>
      <hr />
    </div>
    {/* {recommended movie slider} */}
    <div className='my-8'>
      <PosterSlider config={settings} title='Similar Movies' posters={similar} isDark={false} />
    </div>


  </div>
  </>
  )
}

export default MovieLayout(MoviePage)