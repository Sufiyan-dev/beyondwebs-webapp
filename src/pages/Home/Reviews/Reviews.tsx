import Slider, { Settings } from "react-slick";
import "./Reviews.css";


const CustomPrevArrow = (props: any): React.JSX.Element => {
    const { onClick } = props;
    return (
      <button 
        className="custom-arrow custom-prev" 
        onClick={onClick}
      >
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
      <button 
        className="custom-arrow custom-next" 
        onClick={onClick}
      >
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
  autoplay: false,
  arrows: true,
  dots: false,
  prevArrow: <CustomPrevArrow/>,
  nextArrow: <CustomNextArrow/>
};


const sliderData = [
  {
    review:
      "Had an awesome experience working with Dino, he made a fantastic site for us and was a pleasure to work with from start to finish. He also gave great support after the site was done, you know when most vendors disappear...He is an amazingly talented guy, I highly recommend him. You will not be disappointed!",
    author: "Andrew Ramirez",
    link: "#",
  },
  {
    review:
      "HIRE THEM!!! I had the pleasure of working with RSNL Creative to create my photography website, and I couldn't be happier with the results! From start to finish, they were incredibly professional, responsive, and creative.The team at RSNL took the time to understand my vision for the my website and turned it into a stunning online portfolio that showcases my work beautifully. Their attention to detail and design expertise really shine through in every aspect of the site.Not only did they deliver a visually appealing website, but they also ensured it was fully functional and user-friendly, making it easy for...",
    author: "Cindi Sager",
    link: "#",
  },
  {
    review:
      "Had an awesome experience working with Dino, he made a fantastic site for us and was a pleasure to work with from start to finish. He also gave great support after the site was done, you know when most vendors disappear...He is an amazingly talented guy, I highly recommend him. You will not be disappointed!",
    author: "Andrew Ramirez",
    link: "#",
  },
  {
    review: "Super helpful, super responsive, super affordable",
    author: "Hi Bear",
    link: "#",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <div className="reviews-title-wrapper">
        <h1>Reviews</h1>
      </div>
      <div className="reviews-main-wrapper">
        <div className="reviews-left-wrapper">
          <div className="reviews-subtitle-wrapper">
            <p>Proven results are waiting for you.</p>
          </div>
          <div className="reviews-stars-wrapper">Stars</div>
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
