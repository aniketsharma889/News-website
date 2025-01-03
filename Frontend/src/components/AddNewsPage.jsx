import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddNewsPage = () => {
  const navigate = useNavigate();

  // State to store form values
  const [formData, setFormData] = useState({
    headline: '',
    desc: '',
    link: '',
    image: '',
    category: '',
    author: '',
  });

  // State for error handling and success message
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request to the backend to create news
      await axios.post('http://localhost:5000/api/addNews', formData);
      setSuccess('News added successfully!');
      setError('');
      // Redirect to another page (e.g., homepage) after successful submission
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong!');
      setSuccess('');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Add News</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        {/* Headline */}
        <div className="mb-3">
          <label htmlFor="headline" className="form-label">Headline</label>
          <input
            type="text"
            className="form-control"
            id="headline"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            required
            minLength="15"
            maxLength="100"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            minLength="20"
            maxLength="1000"
          ></textarea>
        </div>

        {/* Link */}
        <div className="mb-3">
          <label htmlFor="link" className="form-label">Link</label>
          <input
            type="url"
            className="form-control"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="world">World</option>
            <option value="politics">Politics</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
          </select>
        </div>

        {/* Author */}
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-outline-success">Add News</button>
      </form>
    </div>
  );
};

export default AddNewsPage;
