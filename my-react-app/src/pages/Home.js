import { useNavigate } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import hero from "../images/hero.png";
import photoGallery1 from "../images/photoGallery1.png";
import photoGallery2 from "../images/photoGallery2.png";
import formImage from "../images/form.png";
import picture1 from "../images/picture1.png";
import picture2 from "../images/picture2.png";

function Home() {
  const navigate = useNavigate();

  const goToFormPage = () => {
    navigate("/form");
  };
  return (
    <div className="Home">
      <div>
        <ImageComponent src={hero} alt="hero" />
        <button onClick={goToFormPage}>Complete Form</button>
      </div>
      <div>
        <div>
          <h1>photo gallery</h1>
          <ImageComponent src={photoGallery1} alt="photoGallery1" />
          <ImageComponent src={photoGallery2} alt="photoGallery2" />
        </div>
        <div>
          <ImageComponent src={formImage} alt="formImage" />
        </div>
      </div>
      <div>
        <ImageComponent src={picture1} alt="picture1" />
        <ImageComponent src={picture2} alt="picture1" />
      </div>
    </div>
  );
}

export default Home;
