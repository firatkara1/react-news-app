import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "../news-item/NewsItem";
import "./news.css";
function News({ cat }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState();

  const API_KEY = "ec78f9cb10ba4f06a258742fe5760341";

  const handlePrevClick = () => {
    // console.log("prev");
    setPage(page - 1);
  };
  const handleNextClick = () => {
    // console.log("next");
    setPage(page + 1);
  };

  useEffect(() => {
    if (cat === "general") {
      if (!(page > Math.ceil(totalArticles / 20))) {
        const getNews = async () => {
          const res = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=tr&category=${cat}&apiKey=${API_KEY}&page=${page}&pageSize=20`
          );

          setArticles(res.data.articles.slice(4));
          setTotalArticles(res.data.totalResults);
        };

        getNews();
      }
    } else {
      const getNews = async () => {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=tr&category=${cat}&apiKey=${API_KEY}&page=${page}&pageSize=20`
        );
        setArticles(res.data.articles);
        setTotalArticles(res.data.totalResults);
      };
      getNews();
    }
  }, [cat, page]);

  return (
    <div className="news">
      {articles.map(
        ({ urlToImage, url, title, publishedAt, description, author }) => (
          <NewsItem
            urlToImage={urlToImage}
            url={url}
            title={title}
            publishedAt={publishedAt}
            description={description}
            author={author}
          />
        )
      )}

      <div className="btn-container">
        <button
          className={page <= 1 ? "hidden" : "prev-btn"}
          onClick={handlePrevClick}
        >
          <i className="fa fa-arrow-left" />
          Önceki
        </button>
        <button
          className={
            page + 1 > Math.ceil(totalArticles / 20) ? "hidden" : "next-btn"
          }
          onClick={handleNextClick}
        >
          Sonraki
          <i className="fa fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default News;
