import React from "react";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/form"); // Replace '/form' with the path to your form page
  };
  const savedData = JSON.parse(localStorage.getItem("formData"));

  return (
    <div className="details-container">
      <h2>Details Page</h2>

      {savedData && (
        <>
          <div className="data-box">
            <p className="data-item"> {savedData.name}</p>
            <p className="data-item"> {savedData.surname}</p>
            <p className="data-item"> {savedData.orderCode}</p>
            <p className="data-item"> {savedData.email}</p>
          </div>
          <div className="message-box">
            <p>Message {savedData.message}</p>
          </div>
        </>
      )}
      <div className="details-page-container-btn">
        <button className="go-back-btn" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;
