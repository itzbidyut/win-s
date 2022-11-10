import React from "react";

export default function ContactDetails() {
  return (
    <div className="ContactDetailsComponent">
      <p className="heading">Contact Us</p>
      <div className="contactDetailsBox">
        <div className="contactDetails">
          <p className="title">Inspections</p>
          <p className="details">(800) 309-6753 | info@wini.com </p>
        </div>
        <div className="contactDetails">
          <p className="title">Franchising</p>
          <p className="details">(800) 309-6753 | info@wini.com </p>
        </div>
        <div className="contactDetails">
          <p className="title">Vendors</p>
          <p className="details">(312) 557-9319 | vendors@wini.com</p>
        </div>
      </div>
    </div>
  );
}
