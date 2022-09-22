import React from "react";
import "./newsitem.css";

function NewsItem({
  urlToImage,
  url,
  title,
  publishedAt,
  description,
  author,
}) {
  const myFormat = (timestamp) => {
    const day = new Date(timestamp).getDate();
    const Month = new Date(timestamp).toLocaleDateString("default", {
      month: "long",
    });
    const hour = new Date(timestamp).getHours().toString().padStart(2, 0);
    const min = new Date(timestamp).getMinutes().toString().padStart(2, 0);
    const myDateFormat = `${day} ${Month} - ${hour}:${min}`;
    return myDateFormat;
  };

  return (
    <div className="news-item">
      <img className="news-img" src={urlToImage} alt="" />
      <div className="news-info">
        <a href={url} className="news-title">
          {title}
        </a>
        <span className="news-author">{author}</span>
        <hr />
        <span className="news-date">{myFormat(publishedAt)}</span>
      </div>
      <p className="news-desc">{description}</p>
    </div>
  );
}

export default NewsItem;
