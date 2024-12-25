import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
import axios from "axios";

const Search = () => {
  const { term } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/news?search=${term}`
        );
        setNews(response.data);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        setError("Failed to fetch search results.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [term]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2>Search Results for: {term}</h2>
      <div className="row">
        {news.length > 0 ? (
          news.map((article) => (
            <div className="col-md-4" key={article._id}>
              <NewsCard {...article} />
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
