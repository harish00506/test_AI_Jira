import React from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import "./App.css";

function App() {
  return (
    // The outermost div now uses the centered-container class to
    // horizontally and vertically center everything on the page.
    <div className="centered-container">
      <RegistrationForm />
    </div>
  );
}

export default App;