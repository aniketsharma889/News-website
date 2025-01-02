import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/Category";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import ProtectedRoute from "./components/ProtectedRoute"; 
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/category/:category"
            element={<ProtectedRoute element={<Category />} />}
          />
          <Route
            path="/search/:term"
            element={<ProtectedRoute element={<Search />} />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
