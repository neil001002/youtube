import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Forn data being sent: ", formData);

    try {
      const response = await fetch("https://sheet.best/api/sheets/84332ffc-952a-4893-81b5-1b71b4f6efec", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP errors! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data: ", data);

      window.alert("Submitted successfully!!");
    } catch (error) {
      console.log("Error occured: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label>Email: </label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div>
        <label>Message: </label>
        <input type="text" name="message" value={formData.message} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
