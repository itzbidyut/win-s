import React from "react";
import { useState } from "react";
export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSUbmit = (e) => {
    e.preventDefault();
    alert(`Subscribed email is---- ${email}`);
    setEmail("");
  };
  return (
    <div className="SubscribeComponent">
      <p className="title">Subscribe to our emails </p>
      <p className="subtitle">
        Enter your email address to receive the latest notifications,
        newsletters, and updates from WIN!
      </p>
      <form className="subscribeForm" onSubmit={handleSUbmit}>
        <input
          placeholder="Your email address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="Subbtn">Subscribe</button>
      </form>
    </div>
  );
}
