import React from 'react';
 import Poster from '../../poster/Poster.Component';
 import Slider from 'react-slick';

 const PosterSlider = (props) => {
   const {posters,title,subtitle,isDark,config} = props;
   const settings={
    infinite:false,
        autoplay:false,
        slidesToShow:5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
   }
 
   return (
     <>
     <div className='flex flex-col items-start sm:ml-3  my-2'>
       <h3 className={`text-2xl text-bold ${isDark ? 'text-white':'text-black'}`} >
         {title}
       </h3>
       <p className={`text-sm ${isDark ? 'text-white':'text-gray-600'}`}>
         {subtitle}
       </p>
     </div>
     {config && (<Slider {...config} >
        {
            posters.map((each,index) => (
                <Poster {...each} isDark={isDark} key={index}/>
            ))
        }

     </Slider>)}
     {!config && (<Slider {...settings} >
        {
            posters.map((each,index) => (
                <Poster {...each} isDark={isDark} key={index}/>
            ))
        }

     </Slider>)}

     </>
  )
}

export default PosterSlider;

