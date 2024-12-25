import PropTypes from 'prop-types'; 
import './NewsCard.css'; 

const NewsCard = ({ author, headline, desc, publishedAt, link, category, image }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={image} className="card-img-top" alt={headline} style={{ height: '300px', objectFit: 'cover' }}/>

      <div className="card-body">
        <h5 className="card-title">{headline}</h5>

        <p className="text-muted">
          By {author} | Category: <span className="badge bg-primary">{category}</span>
        </p>

        <p className="card-text truncated">{desc}</p>

        <p className="text-muted">
          Published on: {new Date(publishedAt).toLocaleString()}
        </p>

        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  author: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default NewsCard;
