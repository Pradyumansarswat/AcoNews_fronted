import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showOptions, setShowOptions] = useState(false);


  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/top-headlines`, {
        params: {
          category,
          country,
          language,
          page,
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching top headlines:', error);
    }
  };


  const searchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/search-news`, {
        params: {
          query,
          country,
          language,
          category,
          page,
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error searching news:', error);
    }
  };


  useEffect(() => {
    if (query === '') {
      fetchTopHeadlines();
    } else {
      searchNews();
    }
  }, [category, country, language, page, query]);


  const handleSearch = (e) => {
    e.preventDefault();
    searchNews();
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div  className="navbar-title"><h1>AcoNews</h1>
            <p>Stay Informed, Stay Ahead with AcoNews</p>
          </div>
          <button className="toggle-button" onClick={() => setShowOptions(!showOptions)}>
            ☰
          </button>
          <div className={`navbar-items ${showOptions ? 'show' : ''}`}>
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
            <div className="dropdown">
              <select className="dropdown-content" onChange={(e) => setCountry(e.target.value)}>
                <option value="in">Country</option>
                <option value="in">India</option>
                <option value="au">Australia</option>
                <option value="br">Brazil</option>
                <option value="ca">Canada</option>
                <option value="cn">China</option>
                <option value="eg">Egypt</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
                <option value="gr">Greece</option>
                <option value="hk">Hong Kong</option>

                <option value="ie">Ireland</option>
                <option value="il">Israel</option>
                <option value="it">Italy</option>
                <option value="jp">Japan</option>
                <option value="nl">Netherlands</option>
                <option value="no">Norway</option>
                <option value="pk">Pakistan</option>
                <option value="pe">Peru</option>
                <option value="ph">Philippines</option>
                <option value="pt">Portugal</option>
                <option value="ro">Romania</option>
                <option value="ru">Russian Federation</option>
                <option value="sg">Singapore</option>
                <option value="es">Spain</option>
                <option value="se">Sweden</option>
                <option value="ch">Switzerland</option>
                <option value="tw">Taiwan</option>
                <option value="ua">Ukraine</option>
                <option value="gb">United Kingdom</option>
                <option value="us">United States</option>
              </select>
            </div>
            <div className="dropdown">
              <select className="dropdown-content" onChange={(e) => setLanguage(e.target.value)}>
                <option value="">Language</option>
                <option value="ar">Arabic</option>
                <option value="zh">Chinese</option>
                <option value="nl">Dutch</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="he">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="ml">Malayalam</option>
                <option value="mr">Marathi</option>
                <option value="no">Norwegian</option>
                <option value="pt">Portuguese</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="es">Spanish</option>
                <option value="sv">Swedish</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="uk">Ukrainian</option>
              </select>
            </div>
            <div className="dropdown">
              <select className="dropdown-content" onChange={(e) => setCategory(e.target.value)}>
                <option value="">Category</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </div>
        </div>
      </nav>


      <div className="background-animation">
        <div className="animation"></div>
      </div>

      <main className="content">
        <div className="articles-container">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <div className="article-card" key={index}>
                <img src={article.image} alt={article.title} />
                <div className="article-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No news articles found.</p>
          )}
        </div>
      </main>


      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Contact Us</h3>
            <p>Email: contact@aconews.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          <div className="footer-right">
            <h3>Follow Us</h3>
            <div className="social-media">
              <a href="https://www.facebook.com/acowale" target="_blank" ><CiFacebook /></a>
              <a href="https://x.com/acowale" target="_blank" ><FaXTwitter /></a>
              <a href="https://www.instagram.com/acowalelimited/" target="_blank" ><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/acowale/" target="_blank" ><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AcoNews. All rights reserved.</p>
        </div>
      </footer>


    </>
  );
};

export default App;
