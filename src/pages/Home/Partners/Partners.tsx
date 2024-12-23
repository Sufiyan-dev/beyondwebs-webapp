import Slider, { Settings } from "react-slick";
import "./Partners.css";
import { useEffect, useRef } from "react";

const sliderData = [
    {imageUrl: "/images/Partners/chapman.png"},
    {imageUrl: "/images/Partners/chiropractor.png"},
    {imageUrl: "/images/Partners/haven.png"},
    {imageUrl: "/images/Partners/jivati.png"},
    {imageUrl: "/images/Partners/jubi-bar.png"},
    {imageUrl: "/images/Partners/space-gods.png"},
    {imageUrl: "/images/Partners/treetop.png"},
    {imageUrl: "/images/Partners/zaza.png"},
]

const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};

const Partners = () => {

    // Type the ref to indicate it will reference an HTMLDivElement
    const partnersWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (partnersWrapperRef.current) {
                const scrollY = window.scrollY;
                // Change the background color based on scroll position
                if (scrollY < 2350) {
                    partnersWrapperRef.current.style.backgroundColor = "black";
                } else {
                    partnersWrapperRef.current.style.backgroundColor = "white";
                }
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (
    <div className="partner-main-wrapper" ref={partnersWrapperRef}>
        <div className="partner-heading-wrapper">
            <div className="partner-title-wrapper">
                <h1>PARTNERS</h1>
            </div>
            <div className="partner-subtitle-wrapper">
                <p>Those we’ve helped along the way.</p>
            </div>
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