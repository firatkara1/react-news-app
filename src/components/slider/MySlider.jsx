import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mySlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MySlider() {
  const [myArray, setMyArray] = useState();
  const cat = "general";
  useEffect(() => {
    const getNews = async () => {
      const res =
        await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${cat}&apiKey=ec78f9cb10ba4f06a258742fe5760341
                `);
      setMyArray(res.data.articles.slice(0, 3));
    };

    getNews();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {myArray?.map((item) => (
          <>
            <img className="news-img" src={item.urlToImage} alt="" />
            <div className="news-info">
              <a href={item.url} className="news-title">
                {item.title}
              </a>
            </div>
            <p className="news-desc">{item.description}</p>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default MySlider;
