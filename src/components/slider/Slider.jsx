import React from 'react'
import ReacSlider from "react-slick";
import css from './Slider.module.css'
// import EachSlide from './eachSlide/EachSlide';
import slide1 from '../../assets/slide1.jpeg'
import slide2 from '../../assets/slide2.jpeg'
import slide3 from '../../assets/slide3.jpeg'
import slide4 from '../../assets/slide4.jpeg'
import slide5 from '../../assets/slide5.jpeg'
import slide6 from '../../assets/slide6.jpeg'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  


function Slider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
      };

    const photos = [slide1, slide2, slide3, slide4, slide5, slide6, slide1, slide2, slide3, slide4, slide5, slide6 ];


  return (
    <div className='container'>
        <ReacSlider {...settings} >
            {photos.map((photo) => (
            <div>
                <img className={css.slider_photo} src={photo} alt="Slide" />
            </div>
            ))}
        </ReacSlider>
    </div>
  )
}

export default Slider