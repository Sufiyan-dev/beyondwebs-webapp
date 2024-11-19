import Slider, { Settings } from "react-slick";
import "./Partners.css";

const Partners = () => {

    const sliderData = [
        {imageUrl: "/images/image2.png"},
        {imageUrl: "/images/image2.png"},
        {imageUrl: "/images/image2.png"},
        {imageUrl: "/images/image2.png"},
        {imageUrl: "/images/image2.png"},
        {imageUrl: "/images/image2.png"},
    ]

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    };

  return (
    <div className="partner-main-wrapper">
        <div>
            <h1>PARTNERS</h1>
        </div>
        <div>
            <p>Those we’ve helped along the way.</p>
        </div>
        <div className="partner-slider-wrapper">
        <Slider {...settings}>
                {sliderData.length > 0 && sliderData.map((slider, i) => (
                    <div className="partners-slide" key={i}>
                        <img src={slider.imageUrl}  />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Partners