import { useEffect, useRef, useState } from "react";
import "./Work.css";

/* Slider imports */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Work = () => {
    const [isBackgroundDark, setIsBackgroundDark] = useState(false);
     // Type the ref to indicate it will reference an HTMLDivElement
    const workWrapperRef = useRef<HTMLDivElement>(null);

    const sliderData = [
        {title: "California", imageUrl: "/images/WhatHaveWorked/california.png"},
        {title: "Jivati", imageUrl: "/images/WhatHaveWorked/jivati.png"},
        {title: "Blizz", imageUrl: "/images/WhatHaveWorked/blizz.png"},
        {title: "ZAZA THC", imageUrl: "/images/WhatHaveWorked/zaza-thc.png"},
        {title: "First Gen", imageUrl: "/images/WhatHaveWorked/first-gen.png"},
        {title: "Torch", imageUrl: "/images/WhatHaveWorked/torch.png"},
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    useEffect(() => {
      const handleScroll = () => {
        if (workWrapperRef.current) {
            const scrollY = window.scrollY;
            const wrapperTop = workWrapperRef.current.getBoundingClientRect().top + window.scrollY;

            // Change the background color based on element position in viewport
            if (scrollY > wrapperTop - 450) {
                setIsBackgroundDark(true);
            } else {
                setIsBackgroundDark(false);
            }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <div className={`work-wrapper ${isBackgroundDark ? 'dark-bg' : 'light-bg'}`} ref={workWrapperRef}>
        <div className='title'>
            <h1>Work that's worked</h1>
        </div>
        <div className='para'>
            <p>We blend street smarts with proven strategy and wrap it in a uniquely So Cal aesthetic that turns the curious into customers.</p>
        </div>
        <div className='slider'>
            <Slider {...settings}>
                {sliderData.length > 0 && sliderData.map((slider, i) => (
                    <div className="slide" key={i}>
                    <div className="slide-heading-wrapper">
                        <h3>{slider.title}</h3>
                    </div>
                    <img src={slider.imageUrl}/>
                </div>
                ))}
            </Slider>
        </div>
        <button className='see-more-act-btn'>See more work</button>
    </div>
  )
}

export default Work