import React from "react";

function DetailsPage() {
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
    </div>
  );
}

export default DetailsPage;
