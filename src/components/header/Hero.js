import React from "react";
import HeroCard from "./HeroCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitMedical } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <div>
      <Slider {...settings} className="slider">
        <div>
          <img alt="slide 1" src="images/s1.jpg" />
          <h4 className="s-text t1">
            <span className="s-span">
              <span>
                <p className="st">We give you the best!</p>
                <FontAwesomeIcon className="s-icon" icon={faKitMedical} />
              </span>{" "}
              Medical{" "}
            </span>
            service that you can <span className="s-span">trust.</span>
            <p className="bt">
              Need professional help? Our support staff will answer your
              questions. Visit us now or make an Appointment!
            </p>
            <Button variant="outline-warning" className="hero-btn">
              Make An Appointment!
            </Button>
          </h4>
        </div>
        <div>
          <img alt="slide 2" src="images/s2.jpg" />
          <h4 className="s-text t2">
            <span className="s-span">
              <span>
                <p className="st">We give you the best!</p>
                <FontAwesomeIcon className="s-icon" icon={faKitMedical} />
              </span>{" "}
              Medical{" "}
            </span>
            service that you can <span className="s-span">trust.</span>
            <p className="bt">
              Need professional help? Our support staff will answer your
              questions. Visit us now or make an Appointment!
            </p>
            <Button variant="outline-warning" className="hero-btn">
              Make An Appointment!
            </Button>
          </h4>
        </div>
        <div>
          <img alt="slide 3" src="images/s3.jpg" />
          <h4 className="s-text t1">
            <span className="s-span">
              <span>
                <p className="st">We give you the best!</p>
                <FontAwesomeIcon className="s-icon" icon={faKitMedical} />
              </span>{" "}
              Medical{" "}
            </span>
            service that you can <span className="s-span">trust.</span>
            <p className="bt">
              Need professional help? Our support staff will answer your
              questions. Visit us now or make an Appointment!
            </p>
            <Button variant="outline-warning" className="hero-btn">
              Make An Appointment!
            </Button>
          </h4>
        </div>
        <div>
          <img alt="slide 4" src="images/s4.jpg" />
          <h4 className="s-text t2">
            <span className="s-span">
              <span>
                <p className="st">We give you the best!</p>
                <FontAwesomeIcon className="s-icon" icon={faKitMedical} />
              </span>{" "}
              Medical{" "}
            </span>
            service that you can <span className="s-span">trust.</span>
            <p className="bt">
              Need professional help? Our support staff will answer your
              questions. Visit us now or make an Appointment!
            </p>
            <Button variant="outline-warning" className="hero-btn">
              Make An Appointment!
            </Button>
          </h4>
        </div>
      </Slider>
      <HeroCard />
    </div>
  );
};
export default Hero;
