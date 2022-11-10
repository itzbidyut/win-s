import React from "react";
import { useState, useRef } from "react";
export default function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const zip = useRef();
  const message = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const InputName = name.current.value;
    const InputEmail = email.current.value;
    const InputPhone = phone.current.value;
    const InputZip = zip.current.value;
    const InputMssage = message.current.value;

    if (
      InputName === "" ||
      InputEmail === "" ||
      InputPhone === "" ||
      InputZip === "" ||
      InputMssage === ""
    ) {
      setError("Please fill all the inpul field");
    } else {
      try {
        let res = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          body: JSON.stringify({
            name: InputName,
            email: InputEmail,
            phone: InputPhone,
            zipCode: InputZip,
            message: InputMssage,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        let resJson = await res.json();

        if (resJson.status === 200) {
          setSuccess("Submitted successfully");
          name.current.value = "";
          email.current.value = "";
          phone.current.value = "";
          zip.current.value = "";
          message.current.value = "";
        } else {
          setError("Something wrong");
        }
      } catch (err) {
        setError("Something wrong");
        console.log(err);
      }
    }
  };
  return (
    <div className="ContactFormComponent">
      <form onSubmit={handleSubmit} className="form">
        <div className="inputRow">
          <div className="inputBox">
            <label>Name</label>
            <input placeholder="Full Name" type="text" ref={name} required />
          </div>
          <div className="inputBox">
            <label>Email</label>
            <input placeholder="xyz@abc.com" type="text" ref={email} required />
          </div>
        </div>
        <div className="inputRow">
          <div className="inputBox">
            <label>Phone Number</label>
            <input
              placeholder="(123) 456-7890"
              type="number"
              ref={phone}
              required
            />
          </div>
          <div className="inputBox">
            <label>ZIP Code</label>
            <input placeholder="XXXXX" type="number" ref={zip} required />
          </div>
        </div>
        <div className="inputBox">
          <label>Message</label>
          <textarea
            placeholder="Please type it in here..."
            type="text"
            ref={message}
            required
          />
        </div>
        <p className="error"> {error}</p>
        <p className="success"> {success}</p>

        <button className="btnSubmit" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
