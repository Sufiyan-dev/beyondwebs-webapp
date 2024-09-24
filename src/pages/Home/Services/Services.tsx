import { useEffect, useRef } from "react";
import "./Services.css";

const servicesData = {
  services: {
    Branding: ["Brand Strategy", "Brand Identity Guide", "Logo Creation"],
    "Web Solutions": [
      "User-Centered Design",
      "Custom Development",
      "Responsive Web Design",
      "E-commerce Solutions",
    ],
    SEO: [
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Technical SEO",
      "Off-Page Strategy",
    ],
    "E-com Marketing": [
      "Email Marketing Campaigns",
      "Upselling & Cross-Selling Strategies",
      "Lead Generation & Review Acquisition",
    ],
    "Graphic Design": [
      "Marketing Materials",
      "Digital & Print Collateral",
      "Custom Graphic Design Services",
    ],
  },
  description: "We are your creative arsenal for all things web-related.",
};

const Services = () => {
   // Type the ref to indicate it will reference an HTMLDivElement
  const servicesWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (servicesWrapperRef.current) {
              const scrollY = window.scrollY;
              // Change the background color based on scroll position
              if (scrollY < 300) {
                servicesWrapperRef.current.style.backgroundColor = "black";
              } else {
                servicesWrapperRef.current.style.backgroundColor = "white";
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
    <div className="services-wrapper" ref={servicesWrapperRef}>
      <div className="services">
        <div className="title-small">SERVICES</div>
        <h1>
          We create brands from
          <br />
          concept to completion.
        </h1>
        <div className="services-container">
          {Object.entries(servicesData.services).map(([category, items]) => (
            <div key={category} className="category-container">
              <h3 className="category-title">{category}</h3>
              <ul className="items-grid">
                {items.map((item, index) => (
                  <li className="item" key={index} >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="tag-line-wrapper">
            <p className="tag-line">{servicesData.description}</p>
            <button>Start a project</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
