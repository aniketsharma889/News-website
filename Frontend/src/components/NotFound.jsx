import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center p-5 border rounded shadow-sm bg-white">
        <h1 className="display-1 text-danger fw-bold">404</h1>
        <p className="fs-4 text-muted mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
