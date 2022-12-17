import React from 'react';
import Slider from 'react-slick';

export const EntertainmentCard = (props) => {
  return (
    <>
      <div className='w-60 h-96 mx-auto px-0'>
        <img src={props.src} alt="entertainment" className='w-full h-full rounded-md' />

      </div>
    </>
  )
}
export const EntertainmentCardSlider = () => {
  const Image = ["https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA1MS4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310546-cdtpchqkps-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS43LzEwICAzMUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343241-pejbcwjyhn-portrait.jpg", 
    ,"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAzNTggdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00317946-qjatxyrbhu-portrait.jpg","https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxNC45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00342169-jevxlrzhmg-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxNzcuMksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323897-vhgjwsrfnw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxLjNLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00322634-zrxwfqsshh-portrait.jpg"];
  const settings = {
    infinite:false,
    autoplay:false,
    slidesToShow:5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {
          Image.map((image,index) => (
            <EntertainmentCard src={image} key={index}/>
          ))
        }
      </Slider>
    </>
  )
}

