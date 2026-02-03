import React, { useState } from "react";
import "./RegistrationForm.css";

/**
 * Simple registration form.
 * - Uses local state for controlled inputs.
 * - Basic validation + console logging on submit.
 * - Styled with the .registration-form class (centered, responsive).
 */
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  /** Update state when any input changes */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** Submit handler – validates required fields and logs data */
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);
    // Reset form after successful submit
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit} noValidate>
      <h2>Register</h2>

      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;