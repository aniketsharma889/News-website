import { useEffect, useState } from 'react';
import NewsCard from './NewsCard'; 
import axios from 'axios';  

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await axios.get('http://localhost:5000/api/news');

        console.log('Full Response:', response);  
        console.log('Response Data:', response.data);  
        console.log('Response Data Type:', typeof response.data);  
        if (Array.isArray(response.data)) {
          setNews(response.data);
        } else {
          setError('Invalid data format received from the server.');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('An error occurred while fetching the news.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchNews();
  }, []);
  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>{error}</div>;  
  }

  return (
    <div className="container mt-4">
      <h2>All News</h2>
      <div className="row">
        {news.length > 0 ? (
          news.map((article) => (
            <div className="col-md-4" key={article._id}>
              <NewsCard
                author={article.author}
                headline={article.headline}
                desc={article.desc}
                publishedAt={article.publishedAt}
                link={article.link}
                category={article.category}
                image={article.image}
              />
            </div>
          ))
        ) : (
          <div>No news available at the moment.</div>  
        )}
      </div>
    </div>
  );
};

export default Home;
