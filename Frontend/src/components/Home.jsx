import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';  // Import the NewsCard component
import axios from 'axios';  // If using axios for data fetching

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // To handle any fetch errors

  // Fetch news data from the backend
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await axios.get('http://localhost:5000/api/news');

        console.log('Full Response:', response);  // Log the full response object
        console.log('Response Data:', response.data);  // Log just the data
        console.log('Response Data Type:', typeof response.data);  // Log the type of response data
        
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
    // Empty dependency array to fetch only once on component mount

  // Show loading or error message
  if (loading) {
    return <div>Loading...</div>;  // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>;  // Show error message if fetching fails
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
          <div>No news available at the moment.</div>  // In case there are no news items
        )}
      </div>
    </div>
  );
};

export default Home;
