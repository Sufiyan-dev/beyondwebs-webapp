import Slider, { Settings } from "react-slick";
import "./Reviews.css";
import ReactStars from "react-stars";
import { useEffect, useRef } from "react";

const CustomPrevArrow = (props: any): React.JSX.Element => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-prev" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3" /* Adjust thickness here */
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="15" y1="18" x2="9" y2="12"></line>
        <line x1="15" y1="6" x2="9" y2="12"></line>
      </svg>
    </button>
  );
};

const CustomNextArrow = (props: any): React.JSX.Element => {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-next" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3" /* Adjust thickness here */
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="9" y1="18" x2="15" y2="12"></line>
        <line x1="9" y1="6" x2="15" y2="12"></line>
      </svg>
    </button>
  );
};

const settings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  dots: false,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const starsSettings = {
  edit: false,
  size: 40,
  count: 5,
  color2: "orange",
  value: 5,
};

const sliderData = [
  {
    review: "Great service and support! Highly recommended.",
    author: "John Doe",
    link: "#",
  },
  {
    review: "Excellent experience! The team was professional and delivered on time.",
    author: "Jane Smith",
    link: "#",
  },
  {
    review: "Very satisfied with the results. Will definitely work with them again.",
    author: "Michael Brown",
    link: "#",
  },
];

const Reviews = () => {

  // Type the ref to indicate it will reference an HTMLDivElement
  const reviewsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const handleScroll = () => {
          if (reviewsWrapperRef.current) {
              const scrollY = window.scrollY;
              // Change the background color based on scroll position
              if (scrollY < 2850) {
                reviewsWrapperRef.current.style.backgroundColor = "white";
              } else {
                reviewsWrapperRef.current.style.backgroundColor = "black";
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
    <div className="reviews-wrapper" ref={reviewsWrapperRef}>
      <div className="reviews-title-wrapper">
        <h1>Reviews</h1>
      </div>
      <div className="reviews-main-wrapper">
        <div className="reviews-left-wrapper">
          <div className="reviews-subtitle-wrapper">
            <p>Proven results are waiting for you.</p>
          </div>
          <div className="reviews-stars-wrapper">
            <ReactStars {...starsSettings} />
          </div>
        </div>
        <div className="reviews-right-wrapper">
          <div className="reviews-slider-wrapper">
            <Slider {...settings}>
              {sliderData.length > 0 &&
                sliderData.map((slider, i) => (
                  <div className="reviews-slide" key={i}>
                    <div className="reviews-slide-content">
                      {/* Review Text */}
                      <p className="reviews-slide-review">{slider.review}</p>

                      {/* Author and Link */}
                      <div className="reviews-slide-author-wrapper">
                        <span className="reviews-slide-author">
                          {" "}
                          <a
                            href={slider.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {slider.author}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
