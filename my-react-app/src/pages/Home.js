import { useNavigate } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import hero from "../images/hero.png";
import photoGalleryFirst from "../images/photoGallery1.png";
import photoGallerySecond from "../images/photoGallery2.png";
import formImage from "../images/form.png";
import pictureFirst from "../images/picture1.png";
import pictureSecond from "../images/picture2.png";

function Home() {
  const navigate = useNavigate();

  const goToFormPage = () => {
    navigate("/form");
  };
  return (
    <div>
      <div className="hero-container">
        <ImageComponent src={hero} alt="hero" />
        <button className="overlay-button" onClick={goToFormPage}>
          Complete Form
        </button>
      </div>
      <div className="home-container">
        <div className="left-section">
          <h2 className="gallery-title">Photo Gallery</h2>
          <div className="gallery-images">
            <ImageComponent src={photoGalleryFirst} alt="photoGalleryFirst" />
            <ImageComponent src={photoGallerySecond} alt="photoGallerySecond" />
          </div>
        </div>
        <div className="right-section">
          <div className="image-with-button">
            <ImageComponent src={formImage} alt="formImage" />
            <button onClick={goToFormPage}>Go to Form</button>
          </div>
        </div>
      </div>
      <div className="full-width-images">
        <ImageComponent src={pictureFirst} alt="pictureFirst" />
        <ImageComponent src={pictureSecond} alt="pictureSecond" />
      </div>
      <div className="info-container">
        <div className="right-content">
          <div className="info-section">
            <div className="info-column">
              <p>Orders</p>
              <p>Way of Payment</p>
            </div>
            <div className="info-column">
              <p>Contacts</p>
              <p>Company Phone</p>
            </div>
            <div className="info-column">
              <p>Additional Information 1</p>
              <p>Additional Information 2</p>
            </div>
          </div>
        </div>
        <div className="left-empty-space"></div>
      </div>
    </div>
  );
}

export default Home;
