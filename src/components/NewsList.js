import React from "react";
import './NewsList.css';

const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.map((article, index) => (
                <div key={index} className="news-card">
                    <img src={article.image} alt={article.title} />
                    <div className="news-content">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
