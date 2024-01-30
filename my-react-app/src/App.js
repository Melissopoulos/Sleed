import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import DetailsPage from "./pages/DetailsPage";
import ImageComponent from "./components/ImageComponent";
import logo from "./images/logo.png";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <ImageComponent src={logo} alt="logo" />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
