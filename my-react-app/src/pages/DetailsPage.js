import React from "react";

function DetailsPage() {
  const savedData = JSON.parse(localStorage.getItem("formData"));

  return (
    <div>
      <h1>Details Page</h1>
      {savedData && (
        <div>
          <p>Name: {savedData.name}</p>
          <p>Surname: {savedData.surname}</p>
          <p>Order Code: {savedData.orderCode}</p>
          <p>Email: {savedData.email}</p>
          <p>Message: {savedData.message}</p>
          <p>
            Accepted Conditions: {savedData.acceptConditions ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
