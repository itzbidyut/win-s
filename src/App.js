import React from "react";
import "./App.css";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="contactBox">
          <div className="contactDetail">
            <ContactDetails />
          </div>
          <div className="contactForm">
            <ContactForm />
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
}

export default App;
