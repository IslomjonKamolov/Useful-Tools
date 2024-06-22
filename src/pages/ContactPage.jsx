import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telegram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telegram: "",
      });
    }, 1000);
  };

  return (
    <>
      <section className="formSection">
        <div className="formSection__containeer container">
          <h2 className="contactTitle">Contact Us</h2>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xnnaapja"
            method="POST"
            target="_blank"
          >
            <label>
              <span className="contactLabel">First name:</span>
              <input
                className="contactInp"
                type="text"
                name="firstName"
                placeholder="Required"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <span className="contactLabel">Last name:</span>
              <input
                className="contactInp"
                type="text"
                name="lastName"
                placeholder="Required"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <span className="contactLabel">Email:</span>
              <input
                className="contactInp"
                type="email"
                name="email"
                placeholder="Required"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <span className="contactLabel">Telegram:</span>
              <input
                className="contactInp"
                type="text"
                name="telegram"
                placeholder="Optional"
                value={formData.telegram}
                onChange={handleChange}
              />
            </label>
            <button className="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
