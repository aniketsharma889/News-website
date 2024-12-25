import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
import axios from "axios";

const Category = () => {
  const { category } = useParams(); 
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/news?category=${category.toLowerCase()}`
        );
        setNews(response.data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryNews();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      <div className="row">
        {news.map((article) => (
          <div className="col-md-4" key={article._id}>
            <NewsCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
