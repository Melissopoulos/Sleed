import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import hero from "../images/hero.png";

function FormPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [email, setEmail] = useState("");
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      surname,
      orderCode,
      email,
      message,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/details");
  };
  return (
    <div className="form-page">
      <div className="form-header-image">
        <ImageComponent src={hero} alt="hero" />
      </div>
      <div className="form-container">
        <h3>Complete Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name *"
              required
            />
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Surname *"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email *"
              required
            />
            <input
              type="text"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
              placeholder="Order Code *"
              required
            />
          </div>
          <div className="textarea-container">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="form-footer">
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={acceptConditions}
                onChange={(e) => setAcceptConditions(e.target.checked)}
                required
              />
              <label htmlFor="conditions">Accept Conditions</label>
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormPage;
