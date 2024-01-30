import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      acceptConditions,
      message,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/details");
  };
  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Surname"
        />
        <input
          type="text"
          value={orderCode}
          onChange={(e) => setOrderCode(e.target.value)}
          placeholder="Order Code"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        ></textarea>
        <label>
          <input
            type="checkbox"
            checked={acceptConditions}
            onChange={(e) => setAcceptConditions(e.target.checked)}
          />
          Accept Conditions
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default FormPage;
